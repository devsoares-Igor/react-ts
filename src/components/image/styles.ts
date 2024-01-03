import styled from "styled-components";

export const ImageStyle = styled.img<{
  $bkgColor: string | undefined;
  $border: string | undefined;
  $borderRadius: string | undefined;
  $width: string | undefined;
  $height: string | undefined;
  $padding: string | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${(props) => props.$bkgColor};
  border: ${(props) => props.$border};
  border-radius: ${(props) => props.$borderRadius};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  gap: 0.5em;
`;

export const ImageLinkStyle = styled.img<{ $bkgColor: string }>`
  display: flexbox;
  background-color: ${(props) => props.$bkgColor};
  cursor: pointer;
`;
