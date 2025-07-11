import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Mental&Saúde - Saúde Mental para Crianças e Adolescentes",
  description: "Avaliações psicológicas digitais inovadoras para escolas e famílias, promovendo bem-estar e melhor desempenho escolar.",
  keywords: ["saúde mental", "crianças", "adolescentes", "psicologia", "avaliação psicológica", "escola", "família"],
  authors: [{ name: "Mental&Saúde" }],
  creator: "Mental&Saúde",
  publisher: "Mental&Saúde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mentalesaude.com.br",
    title: "Mental&Saúde - Saúde Mental para Crianças e Adolescentes",
    description: "Avaliações psicológicas digitais inovadoras para escolas e famílias, promovendo bem-estar e melhor desempenho escolar.",
    siteName: "Mental&Saúde",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental&Saúde - Saúde Mental para Crianças e Adolescentes",
    description: "Avaliações psicológicas digitais inovadoras para escolas e famílias, promovendo bem-estar e melhor desempenho escolar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
          integrity="sha512-Z3yPgp1y1D0RVl0tBP0PcnCYNwRZVLX5jHT5aQAyJqIaIfjdNGwlZj7dL4LBU9o8zqAGJHbWFvZk0I7nUxJJgQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2c4156" />
      </head>
      <body className="font-poppins antialiased">
        <NavBar />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
