// eslint-disable-next-line react/prop-types
export default function FormLinks({ customerStatus, actionLink }) {
    return (
        <>
            <p className="text-slate-400 text-sm mt-2.5">
                { customerStatus } <a href="#" className="text-sky-500">{ actionLink }</a>
            </p>
        </>
    )
}