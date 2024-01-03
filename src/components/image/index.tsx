import React from "react";
import { ImageStyle, ImageLinkStyle } from "./styles";

type ImageProps = {
  /** The text to display inside the button */
  src?: string;
  /** Whether the button can be interacted with */
  alt?: string;
  width?: string;
  height?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Image({
  src,
  alt,
  width,
  height,
  color,
  border,
  borderRadius,
  padding,
}: ImageProps) {
  return (
    <ImageStyle
      src={src}
      alt={alt}
      $width={width}
      $height={height}
      $bkgColor={color}
      $border={border}
      $borderRadius={borderRadius}
      $padding={padding}
    />
  );
}

type ImageLinkProps = {
  src: string;
  alt: string;
  color: string;
  onClick: () => void;
};

export function ImageLink({ src, alt, color, onClick }: ImageLinkProps) {
  return (
    <ImageLinkStyle src={src} alt={alt} $bkgColor={color} onClick={onClick} />
  );
}
