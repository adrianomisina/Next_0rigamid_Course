import dynamic from "next/dynamic"

const WidthPage = dynamic(()=> import ('@/components/width'), {ssr:false})

const SobrePage = () => {

  return (
    <main>
      <h1>Sobre</h1>
      <WidthPage />
    </main>
  )
}

export default SobrePage