export default function Banner(reverse = false) {
  const content = !reverse ? (
    <div className="banner-screen">
      <div className="banner-wrapper">
        <div>
          <h2>Creative harmonious living</h2>
          <p>
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button>Shop now</button>
        </div>
        <div>Img</div>
      </div>
    </div>
  ) : (
    <div>
      <div className="banner-screen">
        <div className="banner-wrapper">
          <div>
            <h2>Creative harmonious living</h2>
            <p>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button>Shop now</button>
          </div>
          <div>Img</div>
        </div>
      </div>
    </div>
  );
  return content;
}
