import svgPaths from "./svg-438etvjho4";
import imgImageBorder from "figma:asset/52d98891cc4839dc63dfd029e93a6af6ece8dc43.png";
import imgDetailed3DAnatomicalModelOfAHumanHeartFloatingInTheCenterOfTheScreen from "figma:asset/ba3373db19c2dfa1aac8a3df4d1c4e9b61e0b80a.png";

function Svg() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[14.35%_13.84%_29.51%_13.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1417 17.9635">
          <path d={svgPaths.p143ef700} fill="var(--fill-0, #135BEC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.19%_8.33%_8.33%_8.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.0733">
          <path clipRule="evenodd" d={svgPaths.p4f86b00} fill="var(--fill-0, #135BEC)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[32px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[25px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.5px] w-[79.05px]">
        <p className="leading-[25px] whitespace-pre-wrap">Séptima</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[72.56px]">
        <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[14px] w-[48.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cursos</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[77.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">Comunidad</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[35.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Perfil</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-end relative w-full">
        <Nav />
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[2.5%] max-w-none size-[95%] top-[2.5%]" src={imgImageBorder} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Header - Top Navigation Bar">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[40px] relative w-full">
          <Container />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[96.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cardiovascular</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[8px] relative shrink-0 w-[4.933px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93333 8">
        <g id="Container">
          <path d={svgPaths.p39c06800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[85.88px]">
        <p className="leading-[20px] whitespace-pre-wrap">Anatomía 3D</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] w-[455.98px]">
        <p className="leading-[30px] whitespace-pre-wrap">Corazón Humano: Estructura Completa</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container4 />
        <Heading />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[8px] items-center pb-[9px] pt-[8.5px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container8 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] text-center w-[66.63px]">
        <p className="leading-[20px] whitespace-pre-wrap">Compartir</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
        <g id="Container">
          <path d={svgPaths.p30aa4a00} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container9 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[14px] text-center w-[52.94px]">
        <p className="leading-[20px] whitespace-pre-wrap">Guardar</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-start relative">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function BreadcrumbsTitleBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Breadcrumbs & Title Bar">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
          <Container3 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Detailed3DAnatomicalModelOfAHumanHeartFloatingInTheCenterOfTheScreen() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-multiply opacity-90 relative shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] w-full" data-name="Detailed 3D anatomical model of a human heart floating in the center of the screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[4.58%] max-w-none top-0 w-[90.83%]" src={imgDetailed3DAnatomicalModelOfAHumanHeartFloatingInTheCenterOfTheScreen} />
      </div>
    </div>
  );
}

import Heart3D from "@/components/Heart3D";

function ThisDivSimulatesThe3DCanvas() {
  return (
    <div className="content-stretch flex flex-col h-[654px] items-start justify-center relative shrink-0 w-[720px]" data-name="This div simulates the 3D canvas">
      <Heart3D />
    </div>
  );
}

function Component3DModelPlaceholder() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="3D Model Placeholder">
      <ThisDivSimulatesThe3DCanvas />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p22307a00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="bg-[#cbd5e1] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[2px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
        <g id="Container">
          <path d="M0 2V0H14V2H0V2" fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="bg-[#cbd5e1] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e38e000} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p11344580} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function FloatingToolbar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] bottom-[24px] content-stretch flex gap-[4px] items-center left-[36.67%] p-[7px] right-[36.67%] rounded-[9999px]" data-name="Floating Toolbar">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Floating Toolbar:shadow" />
      <Button2 />
      <Margin />
      <Button3 />
      <Button4 />
      <Margin1 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[49.73px]">
        <p className="leading-[16px] whitespace-pre-wrap">En vivo</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pr-[220.27px] relative">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container16 />
      </div>
    </div>
  );
}

function InfoOverlayTopLeft() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[8px] items-start left-[24px] p-[17px] rounded-[12px] top-[24px]" data-name="Info Overlay (Top Left)">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container15 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[106.44px]">
        <p className="leading-[24px] whitespace-pre-wrap">Vista Anterior</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[63.75px] justify-center leading-[22.75px] relative shrink-0 text-[#475569] text-[14px] w-[264.31px] whitespace-pre-wrap">
        <p className="mb-0">Mostrando las grandes arterias y la</p>
        <p className="mb-0">superficie ventricular. Haga clic y arrastre</p>
        <p>para rotar.</p>
      </div>
    </div>
  );
}

function Section3DViewportLeft() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative self-stretch" data-name="Section - 3D Viewport (Left)" style={{ backgroundImage: "linear-gradient(137.75deg, rgb(248, 250, 252) 0%, rgb(226, 232, 240) 100%)" }}>
      <Component3DModelPlaceholder />
      <FloatingToolbar />
      <InfoOverlayTopLeft />
    </div>
  );
}

function Container17() {
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

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container17 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-[111.11px]">
          <p className="leading-[24px] whitespace-pre-wrap">Configuración</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f915d80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Container18 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[20px] relative w-full">
          <Heading2 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[101.34px]">
        <p className="leading-[16px] whitespace-pre-wrap">Capas Visibles</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[12px] text-center w-[51.09px]">
        <p className="leading-[16px] whitespace-pre-wrap">Resetear</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Button8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.05px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.05">
        <g id="Container">
          <path d={svgPaths.p1104fd00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[75.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">Piel y Grasa</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Background() {
  return <div className="bg-[#cbd5e1] h-[20px] rounded-[9999px] shrink-0 w-full" data-name="Background" />;
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Container">
      <Background />
      <div className="absolute bg-white right-[20px] rounded-[9999px] size-[20px] top-0" data-name="Input">
        <div aria-hidden="true" className="absolute border-4 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative w-full">
        <Container25 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container22 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[121.48px]">
        <p className="leading-[20px] whitespace-pre-wrap">Músculo Cardíaco</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Background1() {
  return <div className="bg-[#135bec] h-[20px] rounded-[9999px] shrink-0 w-full" data-name="Background" />;
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
    <div className="absolute bg-[#2563eb] content-stretch flex flex-col items-start p-[4px] right-[-4px] rounded-[9999px] size-[28px] top-[-4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <ImageFill />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Container">
      <Background1 />
      <Input />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[rgba(19,91,236,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#135bec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container26 />
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p113ae80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[68.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cavidades</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Background2() {
  return <div className="bg-[#cbd5e1] h-[20px] rounded-[9999px] shrink-0 w-full" data-name="Background" />;
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Container">
      <Background2 />
      <div className="absolute bg-white right-[20px] rounded-[9999px] size-[20px] top-0" data-name="Input">
        <div aria-hidden="true" className="absolute border-4 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative w-full">
        <Container33 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container30 />
          <Margin4 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[111.52px]">
        <p className="leading-[20px] whitespace-pre-wrap">Sist. Conducción</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Background3() {
  return <div className="bg-[#cbd5e1] h-[20px] rounded-[9999px] shrink-0 w-full" data-name="Background" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Container">
      <Background3 />
      <div className="absolute bg-white right-[20px] rounded-[9999px] size-[20px] top-0" data-name="Input">
        <div aria-hidden="true" className="absolute border-4 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative w-full">
        <Container37 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container34 />
          <Margin5 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function LayersControl() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Layers Control">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[127.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">Etiquetas Activas</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[20.48px]">
        <p className="leading-[15px] whitespace-pre-wrap">3/12</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Background4 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[118.33px]">
        <p className="leading-[20px] whitespace-pre-wrap">Aorta Ascendente</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[14px] w-[136.34px]">
          <p className="leading-[20px] whitespace-pre-wrap">Ventrículo Izquierdo</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10">
        <g id="Container">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(19,91,236,0.1)] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-[9px] relative w-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[112.06px]">
        <p className="leading-[20px] whitespace-pre-wrap">Aurícula Derecha</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[126.58px]">
        <p className="leading-[20px] whitespace-pre-wrap">Vena Cava Superior</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Container46 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-[86.73px]">
        <p className="leading-[20px] whitespace-pre-wrap">Válvula Mitral</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function TagsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tags List">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[20px] relative size-full">
          <LayersControl />
          <div className="bg-[#f1f5f9] h-px shrink-0 w-full" data-name="Horizontal Divider" />
          <TagsList />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p2286b600} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[134.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container51 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[65.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Anatomía</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#135bec] content-stretch flex gap-[7.99px] items-center justify-center pb-[13.5px] pt-[12.5px] px-[16px] relative rounded-[8px] shrink-0 w-[132.5px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(19,91,236,0.3),0px_4px_6px_-4px_rgba(19,91,236,0.3)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[64.63px]">
        <p className="leading-[20px] whitespace-pre-wrap">Fisiología</p>
      </div>
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e2e8f0] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-[93px]" data-name="Background">
      <div className="absolute bg-[#135bec] inset-[0_33.33%_0_0]" data-name="Background" />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative w-full">
        <Background5 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[120.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">Progreso del módulo: 66%</p>
        </div>
      </div>
    </div>
  );
}

function FooterNavigation() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Footer Navigation">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[21px] px-[20px] relative w-full">
        <Container50 />
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function AsideSidebarControlsRight() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[320px]" data-name="Aside - Sidebar Controls (Right)">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container19 />
        <FooterNavigation />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function WorkspaceLayout() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Workspace Layout">
      <Section3DViewportLeft />
      <AsideSidebarControlsRight />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main Content Area">
      <BreadcrumbsTitleBar />
      <WorkspaceLayout />
    </div>
  );
}

export default function Component3DCardiovascularAnatomy() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="3D Cardiovascular Anatomy">
      <HeaderTopNavigationBar />
      <MainContentArea />
    </div>
  );
}