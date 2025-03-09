import GalleryItem from '../galleryItem/galleryItem';
import './gallery.css';

const items = [
  { id: 1, media: '/pins/pin1.jpeg', width: 1260, height: 1000 },
  { id: 2, media: '/pins/pin2.jpeg', width: 1205, height: 1110 },
  { id: 3, media: '/pins/pin3.jpeg', width: 1130, height: 1240 },
  { id: 4, media: '/pins/pin4.jpeg', width: 1275, height: 1085 },
  { id: 5, media: '/pins/pin5.jpeg', width: 1140, height: 1220 },
  { id: 6, media: '/pins/pin6.jpeg', width: 1255, height: 1180 },
  { id: 7, media: '/pins/pin7.jpeg', width: 1190, height: 1055 },
  { id: 8, media: '/pins/pin8.jpeg', width: 1065, height: 1300 },
  { id: 9, media: '/pins/pin9.jpeg', width: 1210, height: 1090 },
  { id: 10, media: '/pins/pin10.jpeg', width: 1225, height: 1145 },
  { id: 11, media: '/pins/pin11.jpeg', width: 1185, height: 1015 },
  { id: 12, media: '/pins/pin12.jpeg', width: 1300, height: 1080 },
  { id: 13, media: '/pins/pin13.jpeg', width: 1070, height: 1230 },
  { id: 14, media: '/pins/pin14.jpeg', width: 1240, height: 1165 },
  { id: 15, media: '/pins/pin15.jpeg', width: 1155, height: 1120 },
  { id: 16, media: '/pins/pin16.jpeg', width: 1200, height: 1025 },
  { id: 17, media: '/pins/pin17.jpeg', width: 1115, height: 1295 },
  { id: 18, media: '/pins/pin18.jpeg', width: 1230, height: 1075 },
  { id: 19, media: '/pins/pin19.jpeg', width: 1195, height: 1205 },
  { id: 20, media: '/pins/pin20.jpeg', width: 1080, height: 1250 },
  { id: 21, media: '/pins/pin21.jpeg', width: 1270, height: 1160 },
  { id: 22, media: '/pins/pin22.jpeg', width: 1120, height: 1105 },
  { id: 23, media: '/pins/pin23.jpeg', width: 1265, height: 1140 },
  { id: 24, media: '/pins/pin24.jpeg', width: 1135, height: 1065 },
  { id: 25, media: '/pins/pin25.jpeg', width: 1220, height: 1085 }
];

const Gallery = () => {
  return (
    <div className='gallery'>
      {items.map(item => (
        <GalleryItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Gallery