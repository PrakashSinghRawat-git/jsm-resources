import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    slug: string;
    downloadLink:string;
}

const ResourceCard = ({ id, title, image, downloadNumber, slug, downloadLink }: Props) => {
    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Link href={downloadLink} target="_blank">
                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image
                            src={image}
                            className="full rounded-md object-cover"
                            width={384}
                            height={440}
                            alt={title}
                        ></Image>
                    </div>
                    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
                        {title}
                    </CardTitle>
                </CardHeader>
            </Link>
            <CardContent className="flex-between mt-4 p-0 ">
                <div className="flex-center body-medium gap-1.5 text-white">
                    <Image
                        src="/downloads.svg"
                        width={20}
                        height={20}
                        alt="download"
                    />
                    {downloadNumber}
                </div>
                <Link href={downloadLink} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
                    Download Now
                    <Image
                        src="/arrow-blue.svg"
                        width={13}
                        height={10}
                        alt="arrow"
                    ></Image>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ResourceCard;