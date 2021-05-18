import { useRouter } from 'next/router'

export default function Proyecto() {

    const router = useRouter()
  const { pid } = router.query

    return (
        <>
        <p>Post: {pid}</p>
        <h1>Proyecto: </h1>
        <style jsx>{`
            h1 {
                font-size: 36px
            }
        `}</style>
    </>
    )
}