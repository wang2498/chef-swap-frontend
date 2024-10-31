import { photos } from "@/assets/data"

export default function PhotoPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  return (
    <div className="h-screen w-screen bg-gray-100">
      <img className="mx-auto block w-1/4" src={photo.src} />
    </div>
  )
}
