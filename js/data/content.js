// Contorno de HTML en template strings para cada sección
const contentData = {
    home: `
        <div class="msn-container">
            <!-- 1. Encabezado de Perfil (Estilo MSN) -->
            <div class="msn-header">
                <div class="msn-avatar-container">
                    <div class="msn-avatar">
                        <img src="assets/img/mi-avatar.jpeg" alt="Avatar de Enzo">
                    </div>
                    <div class="msn-status-dot"></div>
                </div>
                
                <div class="msn-info">
                    <h2 class="msn-nickname">Enzo <span class="msn-status-text">(Conectado)</span></h2>
                    <p class="msn-personal-msg">🚀 Construyendo código en Java y Spring || Buscando mi primer rol en IT || Games & Code 24/7</p>
                    <p class="msn-listening-msg">🎵 Escuchando: Here Come The Sun - Remastered 2009 - The Beatles || 🎮 Counter-Strike (Dust 2)</p>
                </div>
            </div>

            <!-- 2. Ventana de Historial de Chat (La Biografía) -->
            <div class="msn-chat-window">
                <div class="msn-chat-scroll">
                    <div class="msn-chat-nudge">
                        <span style="color:gray">(Zumbido)</span> Enzo te acaba de enviar un zumbido!
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            ¡Hola! Soy desarrollador backend especializado en Java y el ecosistema Spring. Me apasiona resolver problemas lógicos y crear estructuras robustas.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Mi formación combina lo mejor de dos mundos: la base analítica de la Licenciatura en Sistemas 
                            (estoy cursando el 4to año en la Univ. Champagnat)
                            y la agilidad práctica de un Bootcamp Full Stack de 600hs.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            A nivel tecnológico, mi terreno natural es el Backend: respiro Java, Spring Boot, PHP y SQL (MySQL), y 
                            actualmente estoy integrando Docker y Spring Security a mi arsenal. Para el Front-End, soy cien por ciento práctico: 
                            me apalanco fuertemente en herramientas de IA Generativa. Esto me permite prototipar interfaces ágiles y funcionales en tiempo récord,
                            dejándome libre para concentrarme en lo que realmente importa: la lógica de negocio, la arquitectura y los datos
                        </div>
                    </div>

                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Tengo un perfil técnico dual. Por un lado, me encanta construir soluciones desde cero y por el otro, disfruto muchísimo analizando y 
                            optimizando procesos que ya existen, buscando
                            fallos y usando herramientas de IA para hacer los sistemas más eficientes.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Creo firmemente en la mejora continua. Cuando no estoy tirando código, estoy metido de lleno perfeccionando mi inglés técnico
                            (actualmente nivel A2) en el Master English Center.
                        </div>
                    </div>

                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Y cuando finalmente me desconecto de las pantallas... , me conecto a otras. Soy un gran fan de la 
                            fotografía y del buen cine. En mis ratos libres me vas a encontrar rankeando en Counter-Strike
                            o relajando la mente mientras mezclo un poco de Tech House y Trance
                        </div>
                    </div>    
                    
                </div>
            </div>
        </div>
    `,
    projects: `
        <div class="explorer-container">
            <!-- 1. Barra de Navegación Superior -->
            <div class="explorer-toolbar">
                <div class="explorer-address-bar">
                    <span class="explorer-folder-icon">📁</span>
                    <span class="explorer-path">C:\\SISTEMA\\PORTAFOLIO\\PROYECTOS</span>
                </div>
                <div class="explorer-view-controls">
                    <button class="explorer-btn" title="Vista de Miniaturas">▀</button>
                    <button class="explorer-btn active" title="Vista de Detalles">≡</button>
                    <button class="explorer-btn" title="Opciones">▼</button>
                </div>
            </div>

            <!-- Área desplazable del explorador -->
            <div class="explorer-content-area">
                <!-- 2. Cuadrícula de Archivos (Grid de Proyectos) -->
                <div class="explorer-grid">
                    
                    <!-- Archivo 1 -->
                    <div class="explorer-item" data-id="simulador-fichas">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #ff9a9a, #ff0000);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Simulador_Fichas.exe</span>
                            <span class="explorer-item-type">Tipo: App Java</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 2 -->
                    <div class="explorer-item" data-id="gestor-stock">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #a8ff78, #78ffd6);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Gestor Stock e Inventario.php</span>
                            <span class="explorer-item-type">Tipo:PHP y MySQL</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 3 -->
                    <div class="explorer-item" data-id="ttm-apk">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #74ebd5, #9face6);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">TTM.apk</span>
                            <span class="explorer-item-type">Tipo: App Android</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    contact: `
        <h1 class="aero-title">Contacto</h1>
        <div class="aero-content-box" style="margin-bottom: 30px;">
            <p style="font-size: 1.1rem; color: #003366; margin-bottom: 20px;">¿Interesado en colaborar en algún proyecto de software o tienes alguna pregunta técnica? Puedes contactarme a través de:</p>
            
            <div class="contact-links-grid">
                <a href="mailto:manriqueenzo1024@gmail.com" class="contact-aero-card">
                    <span class="contact-icon">📧</span>
                    <div class="contact-text">
                        <strong>Email</strong>
                        <span>manriqueenzo1024@gmail.com</span>
                    </div>
                </a>
                
                <a href="https://github.com/EnzoManrique" target="_blank" class="contact-aero-card">
                    <span class="contact-icon">💻</span>
                    <div class="contact-text">
                        <strong>GitHub</strong>
                        <span>https://github.com/EnzoManrique</span>
                    </div>
                </a>
                
                <a href="https://www.linkedin.com/in/enzo-manrique1024" target="_blank" class="contact-aero-card">
                    <span class="contact-icon">💼</span>
                    <div class="contact-text">
                        <strong>LinkedIn</strong>
                        <span>https://www.linkedin.com/in/enzo-manrique1024</span>
                    </div>
                </a>
            </div>
        </div>

        <h1 class="aero-title" style="margin-top: 40px; font-size: 1.8rem;">Mis Certificados</h1>
        <div id="certificados-container" class="certificados-grid">
            <!-- Los certificados se inyectarán aquí dinámicamente mediante JS -->
        </div>
    `
};
