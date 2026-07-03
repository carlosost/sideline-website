import { GrainOverlay }       from './components/GrainOverlay'
import { SectionDeclaration } from './components/sections/SectionDeclaration'
import { SectionBlueLight }   from './components/sections/SectionBlueLight'
import { SectionThesisGrid }  from './components/sections/SectionThesisGrid'
import { SectionMandate }     from './components/sections/SectionMandate'
import { useScrollVelocity }  from './hooks/useScrollVelocity'

export default function App() {
  useScrollVelocity()

  return (
    <>
      <GrainOverlay />
      <main>
        <SectionDeclaration />
        <SectionBlueLight />
        <SectionThesisGrid />
        <SectionMandate />
      </main>
    </>
  )
}
