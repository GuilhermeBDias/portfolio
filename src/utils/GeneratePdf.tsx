import jsPDF from "jspdf";
import { GoArrowUpRight } from "react-icons/go";

function GeneratePdf() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  let x = 20;
  let y = 40;

  // Cabeçalho \\

  doc.setDrawColor("#004aad");
  doc.setLineWidth(10);
  doc.line(18, 20, pageWidth - 18, 20); // Linha horizontal no topo

  doc.setLineWidth(0.5);
  doc.line(18, 15, 18, pageHeight - 15);
  doc.line(pageWidth - 18, 15, pageWidth - 18, pageHeight - 15);

  doc.setFontSize(32);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#004aad"); // Azul
  doc.text("Guilherme", x, y);
  y += 12;

  doc.setTextColor("#545454"); // Preto
  doc.text("Barbosa Dias", x, y);
  y += 10;
  doc.line(18, y, pageWidth - 18, y); // Linha horizontal abaixo do nome
  y += 10;


  // Seção de Contatos \\

  doc.setFontSize(18);
  doc.setFont("helvetica", "normal");

  doc.setTextColor("#004aad"); // Azul
  doc.text("Contatos:", x, y);
  y += 10;
  x += 10;

  doc.setFontSize(14);
  doc.text("• Email:", x, y);
  doc.setTextColor("#545454"); // Preto
  doc.text("guilhermebdias55@gmail.com", x + 18, y);
  y += 8;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• Telefone:", x, y);
  doc.setTextColor("#545454"); // Preto
  doc.text("+55 (61) 99691-1079", x + 25, y);
  y += 8;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• LinkedIn:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("guilherme-barbosa-dias", x + 24, y);

  const LinkedIntextWidth = doc.getTextWidth("guilherme-barbosa-dias");

  doc.link(x + 24, y - 3, LinkedIntextWidth, 4, {
    url: "https://linkedin.com/in/guilherme-barbosa-dias-8532b6302/",
  });
  y += 8;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• GitHub:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("GuilhermeBDias", x + 21, y);

  const githubTextWidth = doc.getTextWidth("GuilhermeBDias");
  doc.link(x + 21, y - 3, githubTextWidth, 4, {
    url: "https://github.com/GuilhermeBDias",
  });

  y += 8;

  doc.setTextColor("#004aad"); // Azul
  doc.text("• Portfólio:", x, y);

  doc.setTextColor("#545454"); // Preto
  doc.text("portfolio-gdias", x + 24, y);

  const PortfolioTextWidth = doc.getTextWidth("portfolio-gdias");
  doc.link(x + 24, y - 3 , PortfolioTextWidth, 4, {
    url: "https://portfolio-gdias.netlify.app",
  });

  y+= 10;

  doc.line(18, y, pageWidth - 18, y); // Linha horizontal abaixo do nome

  y += 10;

  // seção de projetos \\
  
  doc.setFontSize(18);
  doc.setTextColor("#004aad"); // Azul
  doc.text("Projetos:", x - 10, y);
  y += 10;

  doc.setFontSize(14);
  doc.setTextColor("#545454"); // Preto

  




  // Objetivo Profissional \\


  // Formação \\


  // Habilidades \\

  // Certificados \\

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
