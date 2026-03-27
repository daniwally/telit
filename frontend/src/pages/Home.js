import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import TheShift from '@/components/sections/TheShift';
import TheProblem from '@/components/sections/TheProblem';
import TheOpportunity from '@/components/sections/TheOpportunity';
import TheProposal from '@/components/sections/TheProposal';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import StrategicLayer from '@/components/sections/StrategicLayer';
import HowWeWork from '@/components/sections/HowWeWork';
import Phases from '@/components/sections/Phases';
import Deliverables from '@/components/sections/Deliverables';
import BusinessModel from '@/components/sections/BusinessModel';
import Pricing from '@/components/sections/Pricing';
import WhyWTF from '@/components/sections/WhyWTF';
import Closing from '@/components/sections/Closing';

export default function Home() {
  return (
    <div data-testid="home-page" className="relative bg-[#030508] min-h-screen">
      <Navigation />
      <Hero />
      <TheShift />
      <TheProblem />
      <TheOpportunity />
      <TheProposal />
      <WhatWeBuild />
      <StrategicLayer />
      <HowWeWork />
      <Phases />
      <Deliverables />
      <BusinessModel />
      <Pricing />
      <WhyWTF />
      <Closing />
    </div>
  );
}
