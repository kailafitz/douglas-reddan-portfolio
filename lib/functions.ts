export const handleAnchorScroll = (anchor: string) => {
    const section = document.getElementById(anchor);
    section?.scrollTo();
}