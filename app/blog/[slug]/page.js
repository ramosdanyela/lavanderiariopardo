import { notFound } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "Como a Lavanderia Terceirizada Reduz Custos para a Indústria",
    description:
      "Entenda por que fábricas e obras de engenharia confiam em lavanderias industriais para otimizar o orçamento.",
    imageUrl: "/blog/laundry2.webp",
    date: "Jan 20, 2025",
    category: "Indústria",
    content: `
      <p>Empresas de engenharia e manufatura têm em uniformes e panos de chão um alto custo de processamento. A terceirização traz:</p>

      <h2>1. Economia de Insumos</h2>
      <p>Compra e controle de detergentes, desinfetantes e produtos químicos sob medida pela lavanderia.</p>

      <h2>2. Menor Investimento em Infraestrutura</h2>
      <p>Dispensa aquisição e manutenção de equipamentos de grande porte.</p>

      <h2>3. Otimização de Espaço</h2>
      <p>Elimina a necessidade de áreas dedicadas a instalações de lavagem.</p>

      <h2>4. Relatórios Gerenciais</h2>
      <p>Acompanhamento de consumo, quantidade de peças e indicadores de performance.</p>
    `,
  },
  {
    id: 2,
    title: "5 Benefícios da Lavanderia Industrial para Hospitais",
    description:
      "Conheça as vantagens de terceirizar o cuidado com roupas de cama, uniformes e toalhas hospitalares.",
    imageUrl: "/blog/laundry1.webp",
    date: "Jan 05, 2025",
    category: "Saúde",
    content: `
      <p>Para hospitais, a higienização correta de roupas de cama, aventais e toalhas é crítica para prevenção de infecções e conforto dos pacientes. Confira os principais benefícios:</p>

      <h2>1. Padrão Rigoroso de Esterilização</h2>
      <p>Processos validados com certificações garantem remoção eficaz de microrganismos.</p>

      <h2>2. Redução de Custos Operacionais</h2>
      <ul>
        <li>Economia em água, energia e mão de obra interna.</li>
        <li>Evita investimentos em manutenção de máquinas próprias.</li>
      </ul>

      <h2>3. Conformidade com Normas Regulamentadoras</h2>
      <p>Documentação completa para inspeções de vigilância sanitária.</p>

      <h2>4. Flexibilidade de Volume</h2>
      <p>Capacidade de atender picos de demanda em emergências ou campanhas de vacinação.</p>

      <h2>5. Entrega Segura e Pontual</h2>
      <p>Logística programada para não interferir na rotina hospitalar.</p>
    `,
  },
  
    {
    id: 3,
    title: "Soluções Personalizadas para Uniformes Corporativos",
    description:
      "Descubra como adaptar o serviço de lavanderia ao padrão visual e de segurança da sua empresa.",
    imageUrl: "/blog/laundry4.webp",
    date: "Feb 20, 2025",
    category: "Uniformes",
    content: `
      <p>Uniformes refletem a imagem da sua marca. Oferecemos programas customizados para:</p>

      <h2>1. Identidade Visual</h2>
      <p>Programação de cor e estilo de lavagem que preserva logo e tecido.</p>

      <h2>2. Proteção Térmica e Química</h2>
      <p>Tratamentos específicos para uniformes de soldadores, pintores e laboratórios.</p>

      <h2>3. Controle de Entrega</h2>
      <ul>
        <li>Serviço de entrega por turnos conforme escala de trabalho.</li>
        <li>Etiquetas RFID para rastreamento de cada peça.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "Importância da Higienização em Clínicas e Laboratórios",
    description:
      "Veja como um processo de lavagem especializado minimiza riscos e assegura ambientes seguros.",
    imageUrl: "/blog/laundry5.webp",
    date: "Mar 10, 2025",
    category: "Laboratórios",
    content: `
      <p>Em clínicas e laboratórios, a limpeza profunda de aventais, panos e capotes é fundamental:</p>

      <h2>1. Eliminação de Agentes Biológicos</h2>
      <p>Protocolos certificados para agentes patogênicos e resíduos biológicos.</p>

      <h2>2. Testes de Vestimentas</h2>
      <p>Verificação de permeabilidade e integridade de materiais após lavagem.</p>

      <h2>3. Conformidade Sanitária</h2>
      <p>Documentação para auditorias de vigilância sanitária e certificações internas.</p>

      <h2>4. Agilidade no Retorno de Peças</h2>
      <p>Ciclos expressos para minimizar indisponibilidade de uniformes críticos.</p>
    `,
  },
  {
    id: 5,
    title: "Logística Eficiente: Prazo e Entrega Pontual",
    description:
      "Como garantir que sua empresa receba roupas e uniformes dentro do prazo, sem interrupções.",
    imageUrl: "/blog/laundry6.webp",
    date: "Mar 25, 2025",
    category: "Logística",
    content: `
      <p>Para não comprometer a operação de hospitais, indústrias e clínicas, a pontualidade é essencial:</p>

      <h2>1. Rotas Planejadas</h2>
      <p>Coletas e entregas agendadas com base em volume e frequência do cliente.</p>

      <h2>2. Frota Própria</h2>
      <p>Veículos equipados para transporte seguro de peças limpas e contaminadas.</p>

      <h2>3. Confirmação em Tempo Real</h2>
      <ul>
        <li>Notificações via ERP ou WhatsApp no momento da coleta e entrega.</li>
        <li>Relatórios semanais de cumprimento de SLA.</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "Sustentabilidade e Responsabilidade Ambiental em Lavanderia Industrial",
    description:
      "Práticas ecológicas que agregam valor à sua imagem e reduzem impacto ambiental.",
    imageUrl: "/blog/laundry7.webp",
    date: "Apr 05, 2025",
    category: "Sustentabilidade",
    content: `
      <p>Empresas valorizam parceiros que adotam processos responsáveis:</p>

      <h2>1. Reuso de Água Tratada</h2>
      <p>Sistemas de filtragem permitem reutilizar até 60% do volume.</p>

      <h2>2. Energia Renovável</h2>
      <p>Painéis solares para aquecimento, reduzindo emissões de CO₂.</p>

      <h2>3. Produtos Biodegradáveis</h2>
      <p>Detergentes e desinfetantes à base de enzimas e sem fosfatos.</p>

      <h2>4. Relatório de Sustentabilidade</h2>
      <p>Indicadores de consumo de água, energia e redução de resíduos para demonstrar resultados.</p>
    `,
  },
];


export default function BlogPost({ params }) {
  const { slug } = params;

  // Encontra o post correspondente
  const post = posts.find((p) => slugify(p.title) === slug);

  // Retorna 404 caso o post não exista
  if (!post) return notFound();

  return (
    <div className="overflow-hidden bg-[#f9fcfd] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-600 mt-2">
          {post.date} - {post.category}
        </p>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="my-6 rounded-lg w-full"
        />
        <div
          className="prose prose-lg text-gray-600 leading-7"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

// Função para criar URLs amigáveis
const slugify = (text) =>
  text
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais
