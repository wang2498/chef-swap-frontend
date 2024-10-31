import { photos } from "@/assets/data"

export default function PhotoModal({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  return (
    <div className="modal">
      <h1>弹窗页</h1>
      <img style={{ width: "200px", position: "fixed", top: "100px" }} src={photo.src} />
    </div>
  )
}
