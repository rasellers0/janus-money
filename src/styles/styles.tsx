
export const styles = {
    layout: {
        app: `min-h-screen bg-lime-50 text-stone-800`,
        page: `mx-auto max-w-7xl px-6 py-8 bg-emerald-50`,
        section: `space-y-6`,
        centered: `flex min-h-screen items-center justify-center bg-lime-50 px-6`
    },
    card: {
        default: `rounded-2xl bg-white p-8 shadow-md ring-1 ring-lime-300`,
        inset: `rounded-2xl bg-white p-8 shadow-[inset_0_1px_6px_rgba(0,0,0,0.10)] ring-1 ring-lime-300/50`,
        mat: `inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_18px_rgba(0,0,0,0.10),inset_0_1px_2px_rgba(255,255,255,0.8)]`,
        elevated: `rounded-2xl bg-white p-8 shadow-xl`,
        subtle: `rounded-xl bg-lime-100/40 p-6`
    },
    typography: {
        hero: `text-5xl font-bold tracking-tight text-lime-900 text-center p-6 m-6`,
        h1: `text-3xl font-bold text-lime-900`,
        h2: `text-2xl font-semibold text-lime-800`,
        h3: `text-xl font-medium text-lime-800`,
        body: `text-base leading-7 text-stone-700`,
        muted: `text-sm text-stone-500`,
        link: `text-lime-700 underline-offset-4 hover:text-lime-800 hover:underline transition-colors`
    },
    input: {
        text: `w-full rounded-xl border border-lime-200 bg-white px-4 py-3 shadow-sm outline-none
            transition focus:border-lime-400 focus:ring-4 focus:ring-lime-100`,
        error: `border-red-300 focus:border-red-400 focus:ring-red-100`,
        label: `mb-2 block text-sm font-medium text-stone-700`
    },
    button: {
        primary: `rounded-xl bg-lime-600 px-5 py-3 font-medium text-white shadow-sm transition-all
            hover:bg-lime-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50`,
        secondary: `rounded-xl border border-lime-400 bg-white px-5 py-3 font-medium 
            text-lime-800 transition-all hover:bg-lime-100`,
        default: `rounded-xl px-5 py-3 font-medium text-lime-800 shadow-sm transition-all
            hover:bg-neutral-100 hover:shadow-md active:scale-[0.98] disabled:opacity-50`,
        danger: `rounded-xl bg-red-500 px-5 py-3 font-medium text-white transition-all hover:bg-red-600`,
        link: `font-medium text-lime-700 hover:text-lime-800 hover:underline`
    },
    alert: {
        success: `rounded-xl bg-lime-100 p-4 text-lime-900`,
        warning: `rounded-xl bg-yellow-100 p-4 text-yellow-900`,
        error: `rounded-xl bg-red-100 p-4 text-red-800`
    },
    navigation: {
        header: `border-b border-lime-100 bg-white/80 backdrop-blur`,
        sidebar: `border-r border-lime-100 bg-white`,
        navItem: `rounded-lg px-3 py-2 text-stone-700 transition-colors hover:bg-lime-100`,
        activeNavItem: `rounded-lg bg-lime-200 px-3 py-2 font-medium text-lime-900`
    },
    modal: {
        backdrop: `fixed inset-0 bg-black/40 transition-opacity`,
        container: `fixed inset-0 z-10 overflow-y-auto`,
        wrapper:`flex min-h-full items-center justify-center p-4`,
        panel: `w-full max-w-lg rounded-lg bg-white shadow-xl`,
        header: `border-b px-6 py-4`,
        title: `text-lg font-semibold text-gray-900`,
        body: `space-y-4 px-6 py-5`,
        footer: `flex justify-end rounded-b-lg gap-3 border-t bg-gray-50 px-6 py-4`,
    },
    form: {
        group: `space-y-1`,
        label: `block text-sm font-medium text-gray-700`,
        input: `w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none`,
        error: `text-sm text-red-600`,
    },
};