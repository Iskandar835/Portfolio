// All this synthaxe is for an use-friendly media queries 

const breakpoints = {
    xs: "320px",
    md: "768px",
    lg: "1024px",
    lp: "1025px",
}

export const devices = {
    tabs: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
    mobile: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})`,
    tabsAndMobile: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.lg})`,
    onlyComputeur: `(min-width: ${breakpoints.lp})`,
}