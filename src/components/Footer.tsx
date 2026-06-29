import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../ds';

// Global site footer: brand blurb + navigation links. Rendered once in App so it shows on every route.
const css = `
.yf{background:var(--surface-card);border-top:1px solid var(--border-subtle);font-family:var(--font-sans);margin-top:48px;}
.yf__in{max-width:var(--container-max);margin:0 auto;padding:48px 24px 28px;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:32px;}
.yf__brand{display:flex;flex-direction:column;gap:12px;max-width:320px;}
.yf__logo img{height:30px;display:block;}
.yf__tag{font-size:14px;line-height:1.6;color:var(--text-muted);}
.yf__col{display:flex;flex-direction:column;gap:12px;}
.yf__ct{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-subtle);}
.yf__link{font-size:14px;color:var(--text-muted);background:none;border:none;padding:0;text-align:left;cursor:pointer;font-family:inherit;transition:color var(--dur-fast);}
.yf__link:hover{color:var(--brand);}
.yf__bottom{max-width:var(--container-max);margin:0 auto;padding:18px 24px;border-top:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
.yf__copy{font-size:13px;color:var(--text-subtle);}
.yf__made{font-size:13px;color:var(--text-subtle);}
@media(max-width:900px){.yf__in{grid-template-columns:1fr 1fr;}.yf__brand{grid-column:1 / -1;max-width:none;}}
@media(max-width:520px){.yf__in{grid-template-columns:1fr;gap:24px;}.yf__bottom{flex-direction:column;align-items:flex-start;}}
`;
let ic = false;
function ensure() { if (!ic) { ic = true; const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s); } }

export default function Footer() {
  ensure();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="yf">
      <div className="yf__in">
        <div className="yf__brand">
          <div className="yf__logo"><img src="/assets/yala-logo.png" alt="Yala" /></div>
          <p className="yf__tag">
            El marketplace de subastas de coleccionables geek en LatAm. Pokémon TCG, Funko Pop, comics y más,
            con vendedores verificados y precios en soles.
          </p>
        </div>

        <nav className="yf__col">
          <div className="yf__ct">Navegar</div>
          <button className="yf__link" onClick={() => navigate('/')}>Inicio</button>
          <button className="yf__link" onClick={() => navigate('/inicio')}>Explorar subastas</button>
          <button className="yf__link" onClick={() => navigate('/login')}>Vender</button>
        </nav>

        <nav className="yf__col">
          <div className="yf__ct">Ayuda</div>
          <button className="yf__link" onClick={() => navigate('/#como-funciona')}>¿Cómo funciona?</button>
        </nav>
      </div>

      <div className="yf__bottom">
        <span className="yf__copy">© {year} Yala. Todos los derechos reservados.</span>
        <span className="yf__made">Hecho en Perú · Precios en S/.</span>
      </div>
    </footer>
  );
}
