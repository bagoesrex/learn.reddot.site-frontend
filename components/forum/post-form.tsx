"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/lib/api/posts/createPost";

interface PostFormProps {
    topicId: string;
    userId: string;
}

export default function PostForm({ topicId, userId }: PostFormProps) {
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const scrollHeight = textareaRef.current.scrollHeight;

            const maxHeight = 24 * 3;
            textareaRef.current.style.height =
                scrollHeight > maxHeight ? `${maxHeight}px` : `${scrollHeight}px`;
        }
    }, [content]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const { error } = await createPost({ topicId, content, userId });
            if (error) throw error;
            setContent("");
            router.refresh();
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : "Gagal membuat post.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-row gap-3 items-center justify-center">
            <div className="flex flex-col gap-2 w-full">
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tulis post kamu..."
                    rows={1}
                    className="w-full px-3 py-2 min-h-[2.5rem] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="self-end bg-primary/80 text-white px-4 py-2 rounded-lg hover:bg-primary/100 disabled:opacity-50"
            >
                {isLoading ? "Sending..." : "Send"}
            </button>
        </form >
    );
}
