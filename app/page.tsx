import Get from '@/components/Get'

export default function Home() {
  return (
    <Get from="hello">{
      (data) => data
    }</Get>
  )
}
