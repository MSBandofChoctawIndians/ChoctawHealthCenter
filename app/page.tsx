// app/page.tsx
import {Button} from '@nextui-org/button'; 
import Carousel from './components/carousel';

export default function Page() {
  return (
    <div>
      <Carousel />
      <Button>Click me</Button>
    </div>
  )
}