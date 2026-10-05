# Pendências pós-contrato (Mocotó)

Estado: protótipo com Fase 1 (SEO técnico e preview de link) concluída.
Tudo abaixo só entra em escopo se houver contrato. Itens da seção B dependem de
dados ou aprovação do restaurante e NÃO devem ser preenchidos por suposição.

Baseline Lighthouse mobile (PageSpeed, antes da Fase 1, em produção):
Desempenho 90, Acessibilidade 95, Práticas 100, SEO 92.

## A. Decisões de posicionamento
- [ ] Confirmar com o restaurante o termo de posicionamento: "nordestina"
      (usado hoje em tags, rodapé e home) ou "sertaneja" (termo do site oficial).
      Trocar é uma edição em poucos textos; nomes de itens do cardápio
      ('Sertaneja', 'Energético sertanejo') foram mantidos de propósito.

## B. Dados que dependem do restaurante (não inventar)
- [ ] Telefone da matriz (hoje ausente no JSON-LD)
- [ ] CEP das 5 unidades
- [ ] Coordenadas (geo) das 5 unidades
- [ ] Horários de funcionamento por unidade, em formato estruturado
      (openingHours); o site oficial tinha horários inconsistentes
- [ ] Faixa de preço (priceRange)
- [ ] Confirmar que as 5 unidades e os endereços/telefones do JSON-LD estão
      corretos e atuais
- [ ] Formato dos telefones: hoje "(11) xxxx-xxxx"; avaliar "+55 11 ..."
- [ ] Domínio final: trocar em src/seo.js (SITE_URL), index.html e sitemap.xml
- [ ] Foto de preview (og.jpg) em alta resolução (1200 px ou mais); a atual é
      uma fachada ampliada de 800 px
- [ ] Aprovação do restaurante para uso das fotos e textos do site
- [ ] Confirmar a URL canônica do Facebook (a atual é link de compartilhamento
      /share/..., pode expirar)
- [ ] Confirmar se (11) 2951-3056 é o telefone da matriz ou um número geral:
      hoje está no JSON-LD da home e no rodapé, e a unidade Vila Medeiros em
      /casas não tem telefone
- [ ] Decidir noindex enquanto o restaurante não aprovar o protótipo (site usa
      nome, fotos, telefones e links de reserva reais num domínio vercel.app).
      Remover quando houver contrato e domínio final
- [ ] Horários: já existem como texto na página de /casas; estruturar em
      openingHours só depois de confirmar com o restaurante

## C. Evolução técnica (proposta, não implementada)
- [ ] Cardápio por rota/categoria (/cardapio/petiscos, etc.), cada uma com
      title, description e HTML estático próprios. Hoje só a aba padrão
      (Petiscos) é pré-renderizada; as outras 8 dependem de JavaScript.
- [ ] Cardápio em inglês (hoje existe só como PDF no site oficial): toggle PT/EN
- [ ] Decidir destino dos PDFs (cardápio PT, Empório, EN): manter como download
      opcional. Não remover enquanto o conteúdo completo não estiver em HTML.
- [ ] Página 404 real com status 404 (hoje rotas desconhecidas caem no
      index.html com status 200 e sem description/canonical próprios)
- [ ] Gerar o sitemap.xml a partir de src/seo.js (fonte única do domínio)
- [ ] Normalizar os crops das fotos de Casas/Equipe/Home (proporções
      misturadas, ex.: 741x650 e 700x465) e então adicionar width/height
- [ ] LCP do hero (CSS background, fachada01.webp): só se o LCP de laboratório
      em produção passar de 2,5 s. Aplicar <link rel="preload" as="image"> apenas
      na home, conferir o nome final do arquivo no dist, e avaliar AVIF.

- [ ] llms.txt (opcional, sem efeito em SEO; evita adicionar o domínio a mais um lugar) e ai-catalog/ard.json (spec em mudança: só considerar se o restaurante pedir)

## D. Funcionalidades de negócio (proposta, a validar com o restaurante)
- [ ] Reserva em poucos cliques por unidade (hoje há links externos soltos)
- [ ] Formulário de orçamento para eventos
- [ ] Vale-presente com regras claras de uso
- [ ] Indicação de "aberto agora" por unidade
- [ ] Cardápio com busca e filtros

## E. Medição e operação
- [ ] Medir produção com PageSpeed mobile e registrar notas e métricas
      (LCP, FCP, TBT, CLS, Speed Index) após o deploy
- [ ] Cadastrar o site no Google Search Console e enviar o sitemap
- [ ] Validar o card no Sharing Debugger da Meta e o JSON-LD no Rich Results Test
- [ ] Testar em iPhone/Safari real (navegação, modal do pet, reservas)
- [ ] Google Meu Negócio das unidades (responsabilidade do restaurante)
- [ ] Analytics com foco em cliques de reserva e telefone
