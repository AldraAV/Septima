import svgPaths from "./svg-986tlpu8fz";
import imgUserAvatarPlaceholder from "figma:asset/6bb5781d0d27465a5bf991f24eabc42fdb5e20d6.png";

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#616f89] text-[14px] w-[98.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cardiovascular</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[14px] w-[85.63px]">
        <p className="leading-[20px] whitespace-pre-wrap">Señales ECG</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#111318] text-[36px] tracking-[-0.9px] w-[401.16px]">
        <p className="leading-[40px] whitespace-pre-wrap">Análisis de Señales ECG</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] relative shrink-0 text-[#616f89] text-[16px] w-[592.77px] whitespace-pre-wrap">
        <p className="mb-0">Monitorización y filtrado de ondas eléctricas cardíacas en tiempo real. Analice los</p>
        <p>segmentos P-Q-R-S-T.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="var(--fill-0, #111318)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container7 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[14px] text-center w-[100.94px]">
        <p className="leading-[20px] whitespace-pre-wrap">Exportar Datos</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 10.5">
        <g id="Container">
          <path d={svgPaths.p1bc83290} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#135bec] content-stretch flex gap-[8px] items-center pb-[9.5px] pt-[8.5px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.75px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(59,130,246,0.2),0px_2px_4px_-2px_rgba(59,130,246,0.2)]" data-name="Button:shadow" />
      <Container8 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[120.48px]">
        <p className="leading-[20px] whitespace-pre-wrap">Iniciar Simulación</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function BreadcrumbsHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Breadcrumbs & Header">
      <Container />
      <Container3 />
    </div>
  );
}

function BreadcrumbsHeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Breadcrumbs & Header:margin">
      <BreadcrumbsHeader />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[12px] tracking-[0.6px] w-[195.03px]">
        <p className="leading-[16px] whitespace-pre-wrap">LIVE MONITORING • LEAD II</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[43.22px]">
        <p className="leading-[16px] whitespace-pre-wrap">25mm/s</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[50.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">10mm/mV</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-start relative">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function OscilloscopeHeader() {
  return (
    <div className="bg-[rgba(31,41,55,0.5)] relative shrink-0 w-full" data-name="Oscilloscope Header">
      <div aria-hidden="true" className="absolute border-[#374151] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pt-[8px] px-[16px] relative w-full">
          <Container9 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[14.6px] left-[205.17px] top-[155.45px] w-[8.76px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nimbus_Mono_PS:Regular',sans-serif] h-[14.6px] justify-center leading-[0] left-0 not-italic text-[14.6px] text-[rgba(255,255,255,0.7)] top-[7.3px] w-[8.76px]">
        <p className="leading-[normal] whitespace-pre-wrap">P</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[14.6px] left-[230.19px] top-[210.2px] w-[8.76px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nimbus_Mono_PS:Regular',sans-serif] h-[14.6px] justify-center leading-[0] left-0 not-italic text-[14.6px] text-[rgba(255,255,255,0.7)] top-[7.3px] w-[8.76px]">
        <p className="leading-[normal] whitespace-pre-wrap">Q</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[17.033px] left-[245.2px] top-[80.98px] w-[10.22px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nimbus_Mono_PS:Bold',sans-serif] h-[17.033px] justify-center leading-[0] left-0 not-italic text-[#22c55e] text-[17.033px] top-[8.52px] w-[10.22px]">
        <p className="leading-[normal] whitespace-pre-wrap">R</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[14.6px] left-[265.22px] top-[222.36px] w-[8.76px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nimbus_Mono_PS:Regular',sans-serif] h-[14.6px] justify-center leading-[0] left-0 not-italic text-[14.6px] text-[rgba(255,255,255,0.7)] top-[7.3px] w-[8.76px]">
        <p className="leading-[normal] whitespace-pre-wrap">S</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[14.6px] left-[300.25px] top-[149.36px] w-[8.76px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nimbus_Mono_PS:Regular',sans-serif] h-[14.6px] justify-center leading-[0] left-0 not-italic text-[14.6px] text-[rgba(255,255,255,0.7)] top-[7.3px] w-[8.76px]">
        <p className="leading-[normal] whitespace-pre-wrap">T</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[365px] left-0 overflow-clip top-0 w-[800.66px]" data-name="SVG">
      <div className="absolute inset-[30%_0_43.33%_-12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.42%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 903.514 100.105">
            <path d={svgPaths.p4518800} id="Vector" stroke="url(#paint0_linear_1_1011)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.77186" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1011" x1="1.38593" x2="902.128" y1="1.38593" y2="1.38593">
                <stop stopColor="#135BEC" stopOpacity="0.2" />
                <stop offset="0.2" stopColor="#135BEC" stopOpacity="0.8" />
                <stop offset="1" stopColor="#22C55E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">0.0s</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">0.2s</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">0.4s</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">0.6s</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">0.8s</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">1.0s</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">1.2s</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">1.4s</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">1.6s</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] w-[24.02px]">
          <p className="leading-[15px] whitespace-pre-wrap">1.8s</p>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(17,24,39,0.8)] bottom-0 content-stretch flex h-[24px] items-center justify-between left-0 pl-[16px] pr-[16.03px] pt-px right-0" data-name="Timeline">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[36.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">1.0 mV</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[36.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">0.5 mV</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[36.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">0.0 mV</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[42.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">-0.5 mV</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[42.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">-1.0 mV</p>
      </div>
    </div>
  );
}

function YAxisLabels() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-between left-[8px] py-[32px] top-0" data-name="Y-Axis Labels">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function GraphArea() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Graph Area" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1%, rgba(255, 255, 255, 0) 1%), linear-gradient(rgba(255, 255, 255, 0.1) 1%, rgba(255, 255, 255, 0) 1%), linear-gradient(90deg, rgb(10, 15, 22) 0%, rgb(10, 15, 22) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Svg />
        <Timeline />
        <YAxisLabels />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#111827] h-[400px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OscilloscopeHeader />
        <GraphArea />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7eb0b80} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[14px] w-[103.8px]">
        <p className="leading-[20px] whitespace-pre-wrap">Filtros de Señal</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pc296280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#135bec] content-stretch flex flex-col items-start p-px relative rounded-[4px] shrink-0 size-[22px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageFill />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[115.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">Paso bajo (40 Hz)</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[7px] items-center left-[-1px] top-0" data-name="Label">
      <Input />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[80.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">Notch 60 Hz</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-[176.3px] top-0" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container34 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pc296280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg2 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#135bec] content-stretch flex flex-col items-start p-px relative rounded-[4px] shrink-0 size-[22px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageFill1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[115.7px]">
        <p className="leading-[20px] whitespace-pre-wrap">Paso alto (0.5 Hz)</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[7px] items-center left-[316.47px] top-0" data-name="Label">
      <Input1 />
      <Container35 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[461.17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label />
        <div className="absolute bg-[#e5e7eb] h-[24px] left-[159.3px] top-0 w-px" data-name="Vertical Divider" />
        <Label1 />
        <div className="absolute bg-[#e5e7eb] h-[24px] left-[300.47px] top-0 w-px" data-name="Vertical Divider" />
        <Label2 />
      </div>
    </div>
  );
}

function FiltersControlsBar() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Filters & Controls Bar">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[21px] pr-[21.01px] py-[21px] relative w-full">
          <Container29 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function MainOscilloscopeDisplaySpans8ColumnsOnLargeScreens() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[802.66px]" data-name="Main Oscilloscope Display (Spans 8 columns on large screens)">
      <BackgroundBorderShadow />
      <FiltersControlsBar />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Frecuencia Cardíaca</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] pb-[8px] relative w-full">
        <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[60px] justify-center not-italic relative shrink-0 text-[#111318] text-[60px] tracking-[-3px] w-[62.89px]">
          <p className="leading-[60px] whitespace-pre-wrap">72</p>
        </div>
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center relative shrink-0 text-[#6b7280] text-[20px] w-[41.31px]">
          <p className="leading-[28px] whitespace-pre-wrap">bpm</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative">
        <Container36 />
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#16a34a] text-[14px] w-[139.13px]">
          <p className="leading-[20px] whitespace-pre-wrap">Ritmo Sinusal Normal</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[123.75px] right-px top-px w-[132px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 123.75">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.pe213400} fill="var(--fill-0, #EF4444)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HrCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HR Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative w-full">
          <Heading2 />
          <Paragraph />
          <Background />
          <Container37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[0.7px] uppercase w-[170.77px]">
        <p className="leading-[20px] whitespace-pre-wrap">Eventos Detectados</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading3 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Picos R</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111318] text-[24px] w-full">
          <p className="leading-[32px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Intervalo RR</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center left-0 text-[#111318] text-[24px] top-[15.5px] w-[44.45px]">
          <p className="leading-[32px] whitespace-pre-wrap">830</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center left-[48.45px] text-[#9ca3af] text-[12px] top-[20.5px] w-[16.48px]">
          <p className="leading-[16px] whitespace-pre-wrap">ms</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Container43 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center relative w-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111318] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Segmentos Clave</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[76.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Intervalo PR</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111318] text-[14px] w-[50.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">160 ms</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#3b82f6] h-[6px] left-0 right-[55%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[92.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">Complejo QRS</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111318] text-[14px] w-[42.02px]">
        <p className="leading-[20px] whitespace-pre-wrap">90 ms</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#a855f7] h-[6px] left-0 right-[70%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[77.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">Intervalo QT</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111318] text-[14px] w-[50.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">380 ms</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#f97316] h-[6px] left-0 right-[30%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Container45 />
        <Background1 />
        <Container48 />
        <Background2 />
        <Container51 />
        <Background3 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[17px] relative w-full">
        <Heading4 />
        <Container44 />
      </div>
    </div>
  );
}

function EventsCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Events Card">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <Container38 />
        <Container40 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function SideMetricsPanelSpans4Columns() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[389.34px]" data-name="Side Metrics Panel (Spans 4 columns)">
      <HrCard />
      <EventsCard />
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Dashboard Grid">
      <MainOscilloscopeDisplaySpans8ColumnsOnLargeScreens />
      <SideMetricsPanelSpans4Columns />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,91,236,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container54 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[25px] pb-[4px] top-[25px] w-[40px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[18px] w-[124.83px]">
        <p className="leading-[28px] whitespace-pre-wrap">Guía de Ondas</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[119.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[330.63px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22.75px]">{`La onda `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[22.75px]">P</span>
          <span className="leading-[22.75px]">{` representa la despolarización auricular. El`}</span>
        </p>
        <p className="mb-0">
          <span className="leading-[22.75px]">{`complejo `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[22.75px]">QRS</span>
          <span className="leading-[22.75px]">{` corresponde a la despolarización`}</span>
        </p>
        <p>
          <span className="leading-[22.75px]">{`ventricular, y la onda `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[22.75px]">T</span>
          <span className="leading-[22.75px]">{` muestra la repolarización.`}</span>
        </p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(19,91,236,0.05)] relative rounded-[12px] self-stretch shrink-0 w-[389.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin />
      <Heading5 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22876fc0} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative w-full">
        <Container56 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[18px] w-[172.91px]">
          <p className="leading-[28px] whitespace-pre-wrap">Historial de Eventos</p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[176.98px]" data-name="Cell">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] uppercase w-[43.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">Tiempo</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[281.3px]" data-name="Cell">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] uppercase w-[45.53px]">
        <p className="leading-[16px] whitespace-pre-wrap">Evento</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[137.13px]" data-name="Cell">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] uppercase w-[36.77px]">
        <p className="leading-[16px] whitespace-pre-wrap">Valor</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[157.27px]" data-name="Cell">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] uppercase w-[45.89px]">
        <p className="leading-[16px] whitespace-pre-wrap">Estado</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative w-full">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12.5px] relative shrink-0 w-[176.98px]" data-name="Data">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[67.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">00:05:22</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[281.3px]" data-name="Data">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[14px] w-[112.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Pico R Detectado</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[137.13px]" data-name="Data">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[39.56px]">
        <p className="leading-[20px] whitespace-pre-wrap">1.2 mV</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] w-[40.16px]">
        <p className="leading-[16px] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12.5px] relative shrink-0 w-[157.27px]" data-name="Data">
      <Background4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[176.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[67.22px]">
          <p className="leading-[20px] whitespace-pre-wrap">00:05:21</p>
        </div>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[281.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[14px] w-[125.7px]">
          <p className="leading-[20px] whitespace-pre-wrap">Inicio Segmento ST</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[137.13px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] w-[44.88px]">
          <p className="leading-[20px] whitespace-pre-wrap">-0.1 mV</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] w-[40.16px]">
        <p className="leading-[16px] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[157.27px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <Background5 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] w-full">
        <Header />
        <Body />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col gap-[12px] items-start p-[25px] relative rounded-[12px] self-stretch shrink-0 w-[802.67px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading6 />
      <Table />
    </div>
  );
}

function InfoSectionDetails() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Info Section / Details">
      <OverlayBorder />
      <BackgroundBorder2 />
    </div>
  );
}

function InfoSectionDetailsMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Info Section / Details:margin">
      <InfoSectionDetails />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1400px] pb-[26px] pt-[24px] px-[32px] right-0 top-[61px]" data-name="Main Content">
      <BreadcrumbsHeaderMargin />
      <DashboardGrid />
      <InfoSectionDetailsMargin />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p2069b680} fill="var(--fill-0, #616F89)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button">
      <Container58 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#616f89] text-[14px] text-center w-[109.41px]">
        <p className="leading-[20px] whitespace-pre-wrap">Módulo Anterior</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#d1d5db] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#d1d5db] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p32510800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#111318] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[121.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Siguiente Lección</p>
      </div>
      <Container60 />
    </div>
  );
}

function Container57() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative w-full">
          <Button2 />
          <Container59 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function NavigationFooter() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 pb-[16px] pt-[17px] right-0" data-name="Navigation Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container57 />
    </div>
  );
}

function Container62() {
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

function Overlay1() {
  return (
    <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <Container62 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#111318] text-[18px] tracking-[-0.27px] w-[71px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Séptima</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Overlay1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[16.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.75 16.6667">
        <g id="Container">
          <path d={svgPaths.p18e22d80} fill="var(--fill-0, #616F89)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2ab08e80} fill="var(--fill-0, #616F89)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <Container65 />
      <div className="absolute bg-[#ef4444] right-[8px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function UserAvatarPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User avatar placeholder">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatarPlaceholder} />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <UserAvatarPlaceholder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pl-[8px] relative shrink-0 w-[44px]" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative">
        <Button4 />
        <Button5 />
        <Margin1 />
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[13px] pt-[12px] px-[24px] right-0 top-0" data-name="Header - Top Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container61 />
      <Container63 />
    </div>
  );
}

export default function EcgSignalAnalysis() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="ECG Signal Analysis">
      <MainContent />
      <NavigationFooter />
      <HeaderTopNavigation />
    </div>
  );
}