import svgPaths from "./svg-jrgzzuihu8";

function Container1() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18.35">
        <g id="Container">
          <path d={svgPaths.p2756eaa0} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.3px] w-[78.89px]">
        <p className="leading-[25px] whitespace-pre-wrap">Séptima</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay />
        <Heading1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[96.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cardiovascular</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[6px] relative shrink-0 w-[3.7px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.7 6">
        <g id="Container">
          <path d={svgPaths.p2dcc20c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] w-[147.72px]">
        <p className="leading-[20px] whitespace-pre-wrap">Simulación Fisiológica</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative w-full">
        <Link />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] w-[111.02px]">
          <p className="leading-[16px] whitespace-pre-wrap">Sistema Conectado</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <BackgroundBorder />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Header - Top Navigation Bar">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[24px] relative w-full">
          <Container />
          <Container2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px] whitespace-pre-wrap">Ciclo Cardíaco</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">Ajuste los parámetros hemodinámicos para observar el</p>
          <p>impacto en la presión aórtica en tiempo real.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.875px] items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
        <Heading />
        <Container9 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2233f880} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] tracking-[0.35px] uppercase w-[164.7px]">
        <p className="leading-[20px] whitespace-pre-wrap">Frecuencia Cardíaca</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="bg-[#f1f5f9] h-[32px] leading-[0] not-italic relative rounded-[6px] shrink-0 w-[74.42px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center left-[12px] text-[#135bec] text-[16px] top-[16px] w-[28.81px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`75 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center left-[40.81px] text-[#64748b] text-[12px] top-[17px] w-[21.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">bpm</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <ParagraphBackground />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#135bec] left-[82.75px] rounded-[10px] size-[20px] top-[-8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[10px] shadow-[0px_0px_0px_4px_rgba(19,91,236,0.2)] size-[20px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e2e8f0] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <Background1 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="Input">
      <Background />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[14.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">40</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[18.97px]">
        <p className="leading-[16px] whitespace-pre-wrap">180</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Parameter1HeartRate() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Parameter 1: Heart Rate">
      <Container10 />
      <Input />
      <Container14 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p110e1200} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] tracking-[0.35px] uppercase w-[92.23px]">
        <p className="leading-[20px] whitespace-pre-wrap">Resistencia</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="bg-[#f1f5f9] h-[32px] leading-[0] not-italic relative rounded-[6px] shrink-0 w-[84.02px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center left-[12px] text-[#135bec] text-[16px] top-[16px] w-[38.41px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`1.0 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center left-[50.41px] text-[#64748b] text-[12px] top-[17px] w-[21.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">PRU</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <ParagraphBackground1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#135bec] left-[66.19px] rounded-[10px] size-[20px] top-[-8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[10px] shadow-[0px_0px_0px_4px_rgba(19,91,236,0.2)] size-[20px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e2e8f0] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <Background3 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="Input">
      <Background2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[17.3px]">
        <p className="leading-[16px] whitespace-pre-wrap">0.5</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[17px]">
        <p className="leading-[16px] whitespace-pre-wrap">3.0</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Parameter2Resistance() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Parameter 2: Resistance">
      <Container17 />
      <Input1 />
      <Container21 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[13.917px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.9167">
        <g id="Container">
          <path d={svgPaths.p3fa1dd00} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] tracking-[0.35px] uppercase w-[98.45px]">
        <p className="leading-[20px] whitespace-pre-wrap">Compliancia</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="bg-[#f1f5f9] h-[32px] leading-[0] not-italic relative rounded-[6px] shrink-0 w-[112.83px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center left-[12px] text-[#135bec] text-[16px] top-[16px] w-[38.41px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`1.2 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center left-[50.41px] text-[#64748b] text-[12px] top-[17px] w-[50.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">mL/mmHg</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <ParagraphBackground2 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#135bec] left-[115.84px] rounded-[10px] size-[20px] top-[-8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[10px] shadow-[0px_0px_0px_4px_rgba(19,91,236,0.2)] size-[20px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2e8f0] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <Background5 />
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="Input">
      <Background4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[17.3px]">
        <p className="leading-[16px] whitespace-pre-wrap">0.5</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[16.81px]">
        <p className="leading-[16px] whitespace-pre-wrap">2.5</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Parameter3Compliance() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Parameter 3: Compliance">
      <Container24 />
      <Input2 />
      <Container28 />
    </div>
  );
}

function ParametersSection() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Parameters Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <Parameter1HeartRate />
        <Parameter2Resistance />
        <Parameter3Compliance />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Escenarios Clínicos</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-[40.16px]">
          <p className="leading-[16px] whitespace-pre-wrap">Normal</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#135bec] content-stretch flex flex-col items-center justify-center px-[35.75px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#135bec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.33px_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Margin />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 10">
        <g id="Container">
          <path d={svgPaths.p26ac61c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] text-center w-[72.77px]">
          <p className="leading-[16px] whitespace-pre-wrap">Hipertensión</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[19.45px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin1 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[15.771px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.7708">
        <g id="Container">
          <path d={svgPaths.p3bc13c80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] text-center w-[71.31px]">
          <p className="leading-[16px] whitespace-pre-wrap">Insuficiencia</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pl-[20.17px] pr-[20.18px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin2 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function ScenariosPresets() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Scenarios / Presets">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <Label />
        <Container31 />
      </div>
    </div>
  );
}

function AsideLeftPanelControlsParameters() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[400px] z-[2]" data-name="Aside - Left Panel: Controls & Parameters">
      <div className="content-stretch flex flex-col items-start overflow-clip pr-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <ParametersSection />
        <ScenariosPresets />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[27.159px] left-[11px] top-[855.13px] w-[14.387px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[27.159px] justify-center leading-[0] left-0 not-italic text-[#94a3b8] text-[23.975px] top-[13.58px] w-[14.387px]">
        <p className="leading-[normal] whitespace-pre-wrap">0</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[27.159px] left-[11px] top-[663.33px] w-[28.775px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[27.159px] justify-center leading-[0] left-0 not-italic text-[#94a3b8] text-[23.975px] top-[13.58px] w-[28.775px]">
        <p className="leading-[normal] whitespace-pre-wrap">40</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[27.159px] left-[11px] top-[471.53px] w-[28.775px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[27.159px] justify-center leading-[0] left-0 not-italic text-[#94a3b8] text-[23.975px] top-[13.58px] w-[28.775px]">
        <p className="leading-[normal] whitespace-pre-wrap">80</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[27.159px] left-[11px] top-[279.73px] w-[43.162px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[27.159px] justify-center leading-[0] left-0 not-italic text-[#94a3b8] text-[23.975px] top-[13.58px] w-[43.162px]">
        <p className="leading-[normal] whitespace-pre-wrap">120</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[39.3px] left-[825px] top-[892.37px] w-[58.518px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[39.3px] justify-center leading-[0] left-0 text-[#64748b] text-[28.77px] top-[19.65px] w-[58.518px]">
        <p className="leading-[normal] whitespace-pre-wrap">t (s)</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[39.3px] left-[16.5px] top-[41.26px] w-[90.208px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[39.3px] justify-center leading-[0] left-0 text-[#64748b] text-[28.77px] top-[19.65px] w-[90.208px]">
        <p className="leading-[normal] whitespace-pre-wrap">mmHg</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[880px]" data-name="SVG">
      <div className="absolute inset-[90%_0_10%_5%]" data-name="Vector">
        <div className="absolute inset-[-0.87px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 836 1.74875">
            <g id="Vector" opacity="0.5">
              <path d="M0 0.874375H836H0" fill="var(--fill-0, black)" />
              <path d="M0 0.874375H836H0" stroke="var(--stroke-0, #CBD5E1)" strokeWidth="1.74875" />
            </g>
          </svg>
        </div>
      </div>
      <Text />
      <div className="absolute inset-[70%_0_30%_5%]" data-name="Vector">
        <div className="absolute inset-[-0.87px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 836 1.74875">
            <g id="Vector" opacity="0.3">
              <path d="M0 0.874375H836H0" fill="var(--fill-0, black)" />
              <path d="M0 0.874375H836H0" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="6.99" strokeWidth="1.74875" />
            </g>
          </svg>
        </div>
      </div>
      <Text1 />
      <div className="absolute bottom-1/2 left-[5%] right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.87px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 836 1.74875">
            <g id="Vector" opacity="0.3">
              <path d="M0 0.874375H836H0" fill="var(--fill-0, black)" />
              <path d="M0 0.874375H836H0" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="6.99" strokeWidth="1.74875" />
            </g>
          </svg>
        </div>
      </div>
      <Text2 />
      <div className="absolute inset-[30%_0_70%_5%]" data-name="Vector">
        <div className="absolute inset-[-0.87px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 836 1.74875">
            <g id="Vector" opacity="0.3">
              <path d="M0 0.874375H836H0" fill="var(--fill-0, black)" />
              <path d="M0 0.874375H836H0" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="6.99" strokeWidth="1.74875" />
            </g>
          </svg>
        </div>
      </div>
      <Text3 />
      <div className="absolute inset-[10%_95%_10%_5%]" data-name="Vector">
        <div className="absolute inset-[0_-0.87px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.74875 767.2">
            <g id="Vector" opacity="0.5">
              <path d="M0.874375 0V767.2V0" fill="var(--fill-0, black)" />
              <path d="M0.874375 0V767.2V0" stroke="var(--stroke-0, #CBD5E1)" strokeWidth="1.74875" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[23.33%_-5%_48.33%_5%]" data-name="Vector">
        <div className="absolute inset-[-0.97%_-0.3%_-0.96%_-0.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 885.246 276.96">
            <g id="Vector">
              <path d={svgPaths.p2d218c60} fill="url(#paint0_linear_1_1165)" />
              <path d={svgPaths.p2d218c60} stroke="var(--stroke-0, #135BEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.24625" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1165" x1="2.62313" x2="2.62313" y1="2.6234" y2="274.34">
                <stop stopColor="#135BEC" stopOpacity="0.2" />
                <stop offset="1" stopColor="#135BEC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Text4 />
      <Text5 />
    </div>
  );
}

function GraphCanvasContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="Graph Canvas Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(19, 91, 236, 0.05) 2.5%, rgba(19, 91, 236, 0) 2.5%), linear-gradient(rgba(19, 91, 236, 0.05) 2.5%, rgba(19, 91, 236, 0) 2.5%)" }}>
      <Svg />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.8)] font-['Manrope:Bold',sans-serif] font-bold h-[36px] leading-[0] left-0 rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-[#1e293b] top-0 w-[205.44px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-[12px] text-[18px] top-[18px] w-[157.16px]">
        <p className="leading-[28px] whitespace-pre-wrap">Presión Aórtica (P</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-[169.16px] text-[13.5px] top-[23.38px] w-[16.13px]">
        <p className="leading-[28px] whitespace-pre-wrap">ao</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-[185.02px] text-[18px] top-[18px] w-[8.16px]">
        <p className="leading-[28px] whitespace-pre-wrap">)</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.8)] content-stretch flex items-start left-[208.38px] px-[12px] py-[4px] rounded-[6px] top-[9px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[162.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">Monitorización en tiempo real</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[36px] relative shrink-0 w-[395.25px]" data-name="Container">
      <Heading2 />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[8.97px] pr-[8.98px] relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[0.5px] uppercase w-[56.05px]">
          <p className="leading-[15px] whitespace-pre-wrap">Sistólica</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[15.39px] relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[24px] text-center w-[43.22px]">
          <p className="leading-[32px] whitespace-pre-wrap">120</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center min-w-[100px] p-[13px] relative rounded-[12px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container39 />
      <Container40 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[35.67px]">
        <p className="leading-[16px] whitespace-pre-wrap">mmHg</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[5.25px] pr-[5.27px] relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[0.5px] uppercase w-[63.48px]">
          <p className="leading-[15px] whitespace-pre-wrap">Diastólica</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[22.59px] pr-[22.6px] relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[24px] text-center w-[28.81px]">
          <p className="leading-[32px] whitespace-pre-wrap">80</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center min-w-[100px] p-[13px] relative rounded-[12px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container41 />
      <Container42 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[35.67px]">
        <p className="leading-[16px] whitespace-pre-wrap">mmHg</p>
      </div>
    </div>
  );
}

function LiveReadoutOverlay() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Live Readout Overlay">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function GraphHeader() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[32px] right-[32px] top-[16px]" data-name="Graph Header">
      <Container38 />
      <LiveReadoutOverlay />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[18.45px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.45">
        <g id="Container">
          <path d={svgPaths.pbc5000} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[13.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 17.5">
        <g id="Container">
          <path d={svgPaths.p2a37fc00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#135bec] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(19,91,236,0.3),0px_2px_4px_-2px_rgba(19,91,236,0.3)] size-[48px] top-1/2" data-name="Button:shadow" />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p1107cd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function BottomPlaybackControlsFloating() {
  return (
    <div className="absolute bg-white bottom-[24px] content-stretch flex gap-[4px] items-center left-[40.51%] p-[9px] right-[40.51%] rounded-[9999px]" data-name="Bottom Playback Controls (Floating)">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Bottom Playback Controls (Floating):shadow" />
      <Button5 />
      <Margin3 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function SectionRightPanelVisualizationGraph() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[400px] min-w-px relative self-stretch z-[1]" data-name="Section - Right Panel: Visualization Graph">
      <GraphCanvasContainer />
      <GraphHeader />
      <BottomPlaybackControlsFloating />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex isolate items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main Content Area">
      <AsideLeftPanelControlsParameters />
      <SectionRightPanelVisualizationGraph />
    </div>
  );
}

export default function PhysiologicalSimulator() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="Physiological Simulator">
      <HeaderTopNavigationBar />
      <MainContentArea />
    </div>
  );
}