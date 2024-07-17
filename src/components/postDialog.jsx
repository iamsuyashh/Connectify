import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ProfilePhoto from "./shared/profile";
import { Textarea } from "./ui/textarea";
import { Images } from "lucide-react";
import { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import Image from "next/image";
import { createPostAction } from "@/lib/serveractions";

export function PostDialog({ setOpen, open, src, user }) {
    const inputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState("");
    const [inputText, setInputText] = useState("");

    const changeHandler = (e) => {
        setInputText(e.target.value);
    };

    const fileChangeHandler = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataUrl(file);
            setSelectedFile(dataUrl);
        }
    };

    const postActionHandler = async (formData) => {
        const inputText = formData.get("inputText");
        try {
            await createPostAction(inputText, selectedFile);
        } catch (error) {
            console.log("error occurred", error);
        }
        setInputText("");
        setOpen(false);
    };

    return (
        <Dialog open={open}>
            <DialogContent
                onInteractOutside={() => setOpen(false)}
                className="sm:max-w-[425px] w-full max-w-xs mx-auto p-4"
            >
                <DialogHeader>
                    <DialogTitle className="flex gap-2">
                        <ProfilePhoto src={src} />
                        <div>
                            <h1 className="text-base sm:text-lg">Add a Photo</h1>
                            <p className="text-xs sm:text-sm">Post to anyone</p>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <form action={postActionHandler}>
                    <div className="flex flex-col">
                        <Textarea
                            id="name"
                            name="inputText"
                            value={inputText}
                            onChange={changeHandler}
                            className="border-none text-sm sm:text-lg focus-visible:ring-0"
                            placeholder="Type your message here."
                        />
                        <div className="my-4">
                            {selectedFile && (
                                <Image
                                    src={selectedFile}
                                    alt="preview-image"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="flex items-center gap-4 flex-wrap">
                            <input
                                ref={inputRef}
                                onChange={fileChangeHandler}
                                type="file"
                                name="image"
                                className="hidden"
                                accept="image/*"
                            />
                            <Button type="submit" className="flex-1">
                                Post
                            </Button>
                        </div>
                    </DialogFooter>
                </form>
                <Button
                    className="gap-2 mt-2 sm:mt-0"
                    onClick={() => inputRef?.current?.click()}
                    variant={"ghost"}
                >
                    <Images className="text-blue-500" />
                    <p>Media</p>
                </Button>
            </DialogContent>
        </Dialog>
    );
}
