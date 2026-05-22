import React from 'react';

const EngineeringPhilosophy = () => {
  return (
    <section className="engineering-philosophy-section">
      <style>{`
        .engineering-philosophy-section {
          background-color: #16181D;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
        }

        /* Ambient Glow Behind Title */
        .philosophy-ambient-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 250px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.18) 0%, rgba(236, 130, 9, 0) 70%);
          pointer-events: none;
          z-index: 1;
          filter: blur(40px);
        }

        .philosophy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .philosophy-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #EC8209;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .philosophy-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 40px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          /* Premium glow effect using EC8209 drop shadow */
          text-shadow: 0 0 25px rgba(236, 130, 9, 0.65), 0 0 50px rgba(236, 130, 9, 0.35);
        }

        .philosophy-title .highlight-red {
          color: #DB2442;
        }

        .philosophy-desc-container {
          max-width: 820px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .philosophy-paragraph {
          font-size: 17px;
          line-height: 1.8;
          color: #9ca3af;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .engineering-philosophy-section {
            padding: 80px 0;
          }

          .philosophy-container {
            padding: 0 24px;
          }

          .philosophy-title {
            font-size: 32px;
            line-height: 1.3;
            margin-bottom: 30px;
          }

          .philosophy-paragraph {
            font-size: 15px;
            line-height: 1.7;
          }

          .philosophy-desc-container {
            gap: 20px;
          }

          .philosophy-ambient-glow {
            width: 300px;
            height: 180px;
          }
        }
      `}</style>

      {/* Ambient glow behind text */}
      <div className="philosophy-ambient-glow"></div>

      <div className="philosophy-container">
        <span className="philosophy-label">ENGINEERING PHILOSOPHY</span>
        <h2 className="philosophy-title">
          Designed for How Systems <span className="highlight-red">Will Be Used</span>
        </h2>

        <div className="philosophy-desc-container">
          <p className="philosophy-paragraph">
            Our engineering philosophy is grounded in one principle: systems must be designed for how they will
            be used, not how they are demonstrated.
          </p>
          <p className="philosophy-paragraph">
            We design for continuous operation, failure recovery, and long-term maintainability. Hardware,
            firmware, and software are treated as interdependent layers, each influencing system behaviour.
            Testing extends beyond functionality to include endurance, edge cases, and operational stress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
