"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { assets } from "@/src/assets/assets";
import { getImageUrl } from "@/src/lib/imageUrl";

type ApiImageProps = Omit<ImageProps, "src"> & {
  imagePath?: string | null;
};

export default function ApiImage({
  imagePath,
  alt,
  onError,
  ...imageProps
}: ApiImageProps) {
  const [src, setSrc] = useState<ImageProps["src"]>(
    () => getImageUrl(imagePath) ?? assets.desa,
  );

  return (
    <Image
      {...imageProps}
      src={src}
      alt={alt}
      onError={(event) => {
        setSrc(assets.desa);
        onError?.(event);
      }}
    />
  );
}
