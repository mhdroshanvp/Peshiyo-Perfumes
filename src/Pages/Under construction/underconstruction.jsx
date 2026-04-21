import './undercontruction.css';

function UnderConstruction() {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <h1 className="construction-title">🚧 Under Construction 🚧</h1>
        <p className="construction-message">
          We&apos;re working hard to bring you something amazing! Please check back soon.
        </p>
        <div className="construction-animation">
          <div className="cone"></div>
          <div className="barrier"></div>
          <div className="worker"></div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;