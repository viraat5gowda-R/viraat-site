import ScrollHero from '@/app/components/ScrollHero'
import Navigation from '@/app/components/Navigation'
import SectionLogline from '@/app/components/sections/SectionLogline'
import SectionWorld from '@/app/components/sections/SectionWorld'
import SectionDrug from '@/app/components/sections/SectionDrug'
import SectionSynopsis from '@/app/components/sections/SectionSynopsis'
import SectionCharacterGallery from '@/app/components/sections/SectionCharacterGallery'
import SectionArjun from '@/app/components/sections/SectionArjun'
import SectionHeroPOV from '@/app/components/sections/SectionHeroPOV'
import SectionInterval from '@/app/components/sections/SectionInterval'
import SectionPositioning from '@/app/components/sections/SectionPositioning'
import SectionRecognition from '@/app/components/sections/SectionRecognition'
import SectionDirector from '@/app/components/sections/SectionDirector'
import SectionDirectorProof from '@/app/components/sections/SectionDirectorProof'
import SectionMoodTrailer from '@/app/components/sections/SectionMoodTrailer'
import SectionCTA from '@/app/components/sections/SectionCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <ScrollHero />
        <SectionLogline id="logline" />
        <SectionWorld id="world" />
        <SectionDrug id="drug" />
        <SectionSynopsis id="synopsis" />
        <SectionCharacterGallery id="characters" />
        <SectionArjun id="arjun" />
        <SectionHeroPOV id="heropov" />
        <SectionInterval id="interval" />
        <SectionPositioning id="positioning" />
        <SectionRecognition id="recognition" />
        <SectionDirector id="director" />
        <SectionDirectorProof id="proof" />
        <SectionMoodTrailer id="trailer" />
        <SectionCTA id="contact" />
      </main>
    </>
  )
}
