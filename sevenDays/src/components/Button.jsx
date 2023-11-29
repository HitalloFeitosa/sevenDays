// eslint-disable-next-line react/prop-types
export default function Button({buttonLabel}) {
    return (
        <>
            <button type="submit" className="bg-green-500 h-8 w-full rounded text-white max-sm:h-10">{buttonLabel}</button>
        </>
    )
}