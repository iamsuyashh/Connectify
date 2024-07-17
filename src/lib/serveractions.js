"use server"

import { Post } from "../../models/post.model"; // Ensure this path is correct
// import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from 'cloudinary';
import connectDB from "./db";
import { revalidatePath } from "next/cache";
import {Comment } from "../../models/comment.model";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// creating post using server actions
export const createPostAction = async (inputText, selectedFile) => {
    await connectDB();
    const user = await currentUser();
    if (!user) throw new Error('User not authenticated');
    if (!inputText) throw new Error('Input field is required');

    const image = selectedFile;

    const userDatabase = {
        firstName: user.firstName || "Suyash",
        lastName: user.lastName || "Labde",
        userId: user.id,
        profilePhoto: user.imageUrl
    }
    let uploadResponse;
    try {
        if (image) {
            //1. create post with image
            uploadResponse = await cloudinary.uploader.upload(image);
            await Post.create({
                description: inputText,
                user: userDatabase,
                imageUrl: uploadResponse?.secure_url // image URL from cloudinary
            })
        } else {
            //2. create post with text only
            await Post.create({
                description: inputText,
                user: userDatabase
            })
        }
        revalidatePath("/");
    } catch (error) {
        throw Error(error);
    }

}

export const getAllPosts = async () => {
    try {
        await connectDB();
        const posts = await Post.find().sort({ createdAt: -1 }).populate({ path: 'comments', options: { sort: { createdAt: -1 } } });
        console.log(posts)
        if (!posts) return [];
        return JSON.parse(JSON.stringify(posts));
    } catch (error) {
        console.log(error);
    }
}