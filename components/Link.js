import NextJsLink from "next/link";

export const Link = ({ href, ...rest }) => (
    <NextJsLink href={href} as={`${assetPrefix}${href}`} {...rest} />
)
