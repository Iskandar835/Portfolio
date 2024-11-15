// All this synthaxe is for an use-friendly media queries 

const breakpoints = {
    xs: "320px",
    md: "768px",
    lg: "1024px",
}

export const devices = {
    mobile: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})`,
    tabs: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
}