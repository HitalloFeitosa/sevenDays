// eslint-disable-next-line react/prop-types
export default function Button({buttonLabel}) {
    return (
        <>
            <button type="submit" className="bg-green-500 h-9 w-full rounded text-white hover:bg-green-600 focus:outline-none">{buttonLabel}</button>
        </>
    )
}