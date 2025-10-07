import jsPDF from "jspdf";
import { GoArrowUpRight } from "react-icons/go";
import { certificados, habilidades } from "../constants/Curriculo";

function GeneratePdf() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const BreakLineObjective = {
    maxWidth: pageWidth - 60,
    align: "justify" as const,
  };
  const BreakLineFormation = {
    maxWidth: pageWidth - 80,
  };

  let x = 20;
  let y = 40;

  // Cabeçalho \\

  doc.setDrawColor("#004aad");
  doc.setLineWidth(10);
  doc.line(18, 20, pageWidth - 18, 20); // Linha horizontal no topo

  doc.setLineWidth(0.5);
  doc.line(18, 15, 18, pageHeight - 15);
  doc.line(pageWidth - 18, 15, pageWidth - 18, pageHeight - 15);

  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#004aad"); // Azul
  doc.text("Guilherme", x, y);
  y += 10;

  doc.setTextColor("#545454"); // Preto
  doc.text("Barbosa Dias", x, y);
  y += 6;
  doc.line(18, y, pageWidth - 18, y); // Linha horizontal abaixo do nome
  y += 8;

  // Seção de Contatos \\

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");

  doc.setTextColor("#004aad"); // Azul
  doc.text("Contatos:", x, y);
  y += 8;
  x += 10;

  doc.setFontSize(12);
  doc.text("• Email:", x, y);
  doc.setTextColor("#545454"); // Preto
  doc.text("guilhermebdias55@gmail.com", x + 16, y);
  y += 6;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• Telefone:", x, y);
  doc.setTextColor("#545454"); // Preto
  doc.text("+55 (61) 99691-1079", x + 21, y);
  y += 6;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• LinkedIn:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("guilherme-barbosa-dias", x + 21, y);

  const LinkedIntextWidth = doc.getTextWidth("guilherme-barbosa-dias");

  doc.link(x + 21, y - 2, LinkedIntextWidth, 2, {
    url: "https://linkedin.com/in/guilherme-barbosa-dias-8532b6302/",
  });
  y += 6;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• GitHub:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("GuilhermeBDias", x + 18, y);

  const githubTextWidth = doc.getTextWidth("GuilhermeBDias");
  doc.link(x + 21, y - 2, githubTextWidth, 3, {
    url: "https://github.com/GuilhermeBDias",
  });

  y += 6;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• Portfólio:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("portfolio-gdias", x + 20, y);

  const PortfolioTextWidth = doc.getTextWidth("portfolio-gdias");
  doc.link(x + 24, y - 2, PortfolioTextWidth, 3, {
    url: "https://portfolio-gdias.netlify.app",
  });
  y += 6;

  doc.line(18, y, pageWidth - 18, y); // Linha horizontal

  y += 8;

  // Objetivo Profissional \\

  doc.setFontSize(16);
  doc.setTextColor("#004aad"); // Azul
  doc.text("Objetivo Profissional:", x - 10, y);
  y += 8;

  doc.setFontSize(12);
  doc.setTextColor("#545454"); // Preto

  doc.text(
    "Profissional de Tecnologia da Informação (TI) dedicado, em busca de uma oportunidade para aplicar conhecimentos acadêmicos, desenvolver habilidades práticas e contribuir para projetos inovadores no campo da tecnologia",
    x,
    y,
    BreakLineObjective
  );

  y += 16;

  doc.line(18, y, pageWidth - 18, y); // Linha horizontal

  y += 8;

  // Formação \\

  doc.setFontSize(16);
  doc.setTextColor("#004aad"); // Azul
  doc.text("Formação:", x - 10, y);

  y += 8;

  doc.setFontSize(12);
  doc.setTextColor("#545454"); // Preto

  doc.text("• 2022 - Atual:", x, y);
  doc.text("Licenciatura em Computação (Noturno)", x + 30, y);
  y += 6;
  doc.text("Universidade de Brasília (UnB)", x + 30, y);

  doc.setDrawColor("#272A3C");

  doc.line(32, y + 4, pageWidth - 32, y + 4); // Linha horizontal entre formações

  doc.setDrawColor("#004aad");

  y += 10;
  doc.text("• 2019 - 2021:", x, y);
  doc.text("Ensino Médio", x + 30, y);
  y += 6;
  doc.text(
    "Centro Educacional 02 de Sobradinho (CED-02) / (CEM-02)",
    x + 30,
    y,
    BreakLineFormation
  );
  y += 8;

  doc.line(18, y, pageWidth - 18, y); // Linha horizontal

  y += 8;

  // Habilidades \\

  doc.setFontSize(16);
  doc.setTextColor("#004aad"); // Azul
  doc.text("Habilidades:", x - 10, y);

  doc.setFontSize(12);
  doc.setTextColor("#545454"); // Preto

  y += 2;

  habilidades.forEach((item) => {
    y += 6;
    doc.text(item.skill, x, y, BreakLineObjective);
  });

  y += 6;
  doc.line(18, y, pageWidth - 18, y); // Linha horizontal

  y += 8;

  // Certificados \\

  doc.setFontSize(16);
  doc.setTextColor("#004aad"); // Azul
  doc.text("Certificados:", x - 10, y);

  doc.setFontSize(12);
  doc.setTextColor("#545454"); // Preto

  y += 8;

  certificados.forEach((item) => {
    const textWidth = doc.getTextWidth(item.titulo);
    doc.setTextColor("#004aad");
    doc.textWithLink(item.titulo, x, y, { url: item.url });
    doc.setDrawColor("#004aad");
    doc.line(x, y + 1, textWidth + x + 1, y + 1);
    y += 8;
  });

  doc.setLineWidth(10);

  doc.line(18, pageHeight - 20, pageWidth - 18, pageHeight - 20); // Linha horizontal

  const url = doc.output("bloburl");
  window.open(url, "_blank");
}

const GeneratePdfButton = () => {
  return (
    <button
      onClick={GeneratePdf}
      className="absolute justify-center w-full h-full items-center cursor-pointer gap-1"
    >
      <p className="flex w-full items-center justify-center">
        Download my CV
        <GoArrowUpRight
          size={20}
          className="group-hover:rotate-90 transition-transform duration-300 flex md:hidden"
        />
        <GoArrowUpRight
          size={26}
          className="group-hover:rotate-90 transition-transform duration-300 hidden md:flex"
        />
      </p>
    </button>
  );
};

export default GeneratePdfButton;
