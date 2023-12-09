// app/page.tsx
import {Button} from '@nextui-org/button'; 
import Carousel from './components/carousel';

export default function Page() {
  return (
    <div>
      <Carousel images={['./slide01.jpg', '.slide02.jpg', 'slide03.jpg']}/>
      <Button>Click me</Button>
    </div>
  )
}