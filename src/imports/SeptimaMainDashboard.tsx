import svgPaths from "./svg-kgc9oey64v";

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex items-center justify-center left-[443.16px] px-[13px] py-[5px] rounded-[9999px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#1d4ed8] text-[12px] text-center w-[111.67px]">
        <p className="leading-[16px] whitespace-pre-wrap">Panel de Estudiante</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[42px]" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] text-center tracking-[-1.2px] w-[377.44px]">
        <p className="leading-[48px] whitespace-pre-wrap">Bienvenido, José</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[98px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[18px] text-center w-[311.72px]">
        <p className="leading-[28px] whitespace-pre-wrap">Sistema Cardiovascular en desarrollo</p>
      </div>
    </div>
  );
}

function GreetingSection() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Greeting Section">
      <BackgroundBorder />
      <Heading1 />
      <Container1 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="h-[68px] relative shrink-0 w-[72px]" data-name="Background+Shadow">
      <div className="absolute inset-[-1.47%_-2.78%_-4.41%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 72">
          <g filter="url(#filter0_d_1_1227)" id="Background+Shadow">
            <rect fill="var(--fill-0, white)" height="68" rx="34" shapeRendering="crispEdges" width="72" x="2" y="1" />
            <path d={svgPaths.p4ffd980} fill="var(--fill-0, #135BEC)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_1_1227" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1227" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1227" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-b from-[rgba(19,91,236,0.05)] h-[192px] relative shrink-0 to-[rgba(19,91,236,0)] w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[12px] tracking-[0.6px] uppercase w-[63.92px]">
        <p className="leading-[16px] whitespace-pre-wrap">Módulo 1</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[67.55px]">
        <p className="leading-[16px] whitespace-pre-wrap">En progreso</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <div className="bg-[#cbd5e1] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Cardiovascular</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Anatomía, fisiología y patologías del</p>
        <p>corazón y vasos sanguíneos.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Margin">
          <path d={svgPaths.p19103300} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] w-[118.8px]">
        <p className="leading-[20px] whitespace-pre-wrap">Continuar lección</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Margin />
        <Heading2 />
        <Container6 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute right-[2px] top-[2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative">
        <Background1 />
      </div>
    </div>
  );
}

function Card1CardiovascularActive() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[325.33px]" data-name="Card 1: Cardiovascular (Active)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Background />
        <Container2 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,91,236,0.05),0px_4px_6px_-4px_rgba(19,91,236,0.05)]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="relative shrink-0 size-[68px]" data-name="Background">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <g id="Background">
          <rect fill="var(--fill-0, #E2E8F0)" height="68" rx="34" width="68" />
          <path d={svgPaths.p376a9ec0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f8fafc] h-[192px] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Módulo 2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Nervioso</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Estructura y función del sistema nervioso</p>
        <p>central y periférico.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.75">
        <g id="Margin">
          <path d={svgPaths.p2bea3800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[70.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Bloqueado</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Margin3 />
        <Heading3 />
        <Container13 />
        <Margin4 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(100,116,139,0.1)]" />
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] w-[45.77px]">
        <p className="leading-[16px] whitespace-pre-wrap">Próximo</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute right-px top-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative">
        <Background4 />
      </div>
    </div>
  );
}

function Card2NerviosoLockedNext() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start opacity-70 p-px relative rounded-[12px] self-stretch shrink-0 w-[325.33px]" data-name="Card 2: Nervioso (Locked/Next)">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Background2 />
      <Container10 />
      <Container15 />
    </div>
  );
}

function Background6() {
  return (
    <div className="h-[70px] relative shrink-0 w-[71.95px]" data-name="Background">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.95 70">
        <g id="Background">
          <rect fill="var(--fill-0, #E2E8F0)" height="70" rx="35" width="71.95" />
          <path d={svgPaths.pe9183c8} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f8fafc] h-[192px] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Módulo 3</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Respiratorio</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Mecánica ventilatoria e intercambio</p>
        <p>gaseoso.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.75">
        <g id="Margin">
          <path d={svgPaths.p2bea3800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin8 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[70.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Bloqueado</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Margin6 />
        <Heading4 />
        <Container19 />
        <Margin7 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(100,116,139,0.1)]" />
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] w-[45.77px]">
        <p className="leading-[16px] whitespace-pre-wrap">Próximo</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute right-px top-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative">
        <Background7 />
      </div>
    </div>
  );
}

function Card3RespiratorioLockedNext() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start opacity-70 p-px relative rounded-[12px] self-stretch shrink-0 w-[325.34px]" data-name="Card 3: Respiratorio (Locked/Next)">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Background5 />
      <Container16 />
      <Container21 />
    </div>
  );
}

function ModulesGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Modules Grid">
      <Card1CardiovascularActive />
      <Card2NerviosoLockedNext />
      <Card3RespiratorioLockedNext />
    </div>
  );
}

function ModulesGridMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Modules Grid:margin">
      <ModulesGrid />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-[151.08px]">
        <p className="leading-[28px] whitespace-pre-wrap">Progreso General</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[186.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">Completitud del curso actual</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[30px] w-[65.92px]">
        <p className="leading-[36px] whitespace-pre-wrap">80%</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[33px] right-[33px] top-[33px]" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#135bec] inset-[0_20%_0_0] rounded-[9999px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[16px] left-[33px] overflow-clip right-[33px] rounded-[9999px] top-[97px]" data-name="Background">
      <Background9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[29.98px]">
        <p className="leading-[16px] whitespace-pre-wrap">Inicio</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[57.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">Meta Final</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[33px] right-[33px] top-[125px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function ProgressSection() {
  return (
    <div className="bg-white h-[174px] relative rounded-[12px] shrink-0 w-full" data-name="Progress Section">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container22 />
      <Background8 />
      <Container26 />
    </div>
  );
}

function ProgressSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Progress Section:margin">
      <ProgressSection />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <GreetingSection />
      <ModulesGridMargin />
      <ProgressSectionMargin />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[55px] pt-[48px] px-[24px] right-0 top-[73px]" data-name="Main Content">
      <Container />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[432.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">© 2023 Séptima Educación Médica. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

function FooterSimple() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 py-[24px] right-0 top-[988px]" data-name="Footer Simple">
      <Container29 />
    </div>
  );
}

function Container31() {
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
    <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container31 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.5px] w-[79.05px]">
        <p className="leading-[28px] whitespace-pre-wrap">Séptima</p>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Brand">
      <Overlay />
      <Heading />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonAyuda() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button - Ayuda">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonConfiguracion() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button - Configuración">
      <Container33 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[#e2e8f0] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#135bec] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(19,91,236,0.2),0px_2px_4px_-2px_rgba(19,91,236,0.2)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[18.98px]">
        <p className="leading-[20px] whitespace-pre-wrap">JM</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-name="Button">
      <Background10 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Actions">
      <ButtonAyuda />
      <ButtonConfiguracion />
      <Margin9 />
      <Button />
    </div>
  );
}

function Container30() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Brand />
        <Actions />
      </div>
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[17px] pt-[16px] px-[24px] right-0 top-0" data-name="Header - Top Navigation Bar">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

export default function SeptimaMainDashboard() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Séptima Main Dashboard">
      <MainContent />
      <FooterSimple />
      <HeaderTopNavigationBar />
    </div>
  );
}