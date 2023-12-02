// eslint-disable-next-line react/prop-types
export default function FormLinks({ customerStatus, actionLink }) {
    return (
        <>
            <p className="text-slate-400 text-sm mt-2.5 text-center">
                { customerStatus } <a href="#" className="text-sky-500 hover:text-sky-600 focus:outline-none">{ actionLink }</a>
            </p>
        </>
    )
}