# Go Smile Landing Page

Landing page de alta conversão para a clínica dentária Go Smile, focada em captação de leads para implantes dentários e reabilitação oral.

## Funcionalidades
- **Formulário de Leads**: Integrado com webhook n8n.
- **Quiz Interativo**: Para qualificação de pacientes.
- **Meta Pixel**: Rastreamento de visualizações de página e conversões (Leads).
- **Design Responsivo**: Otimizado para dispositivos móveis.

## Tecnologias
- React 19
- Tailwind CSS
- Lucide React
- Vite

## Configuração do Meta Pixel
O código do Meta Pixel está configurado no arquivo `index.html`.
As conversões são rastreadas automaticamente:
- **PageView**: Em todas as visitas.
- **Lead**: Quando o formulário de contacto é enviado com sucesso.
- **ViewContent**: Quando o quiz é concluído.

## Como Implementar no GitHub
1. Inicialize o repositório: `git init`
2. Adicione os arquivos: `git add .`
3. Commit: `git commit -m "Add Meta Pixel tracking and landing page features"`
4. Adicione o remoto: `git remote add origin <URL_DO_REPOSITORIO>`
5. Push: `git push -u origin main`
