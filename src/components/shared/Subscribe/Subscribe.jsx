export const Subscribe = ({subData}) => {
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form'>
            <div className='subscribe-form__img'>
              <img
                src='/assets/img/Face/subscribe-img.jpg'
                className='js-img'
                alt=''
              />
            </div>
            <form>
              <h3>{subData.sub1}</h3>
              <p>{subData.sub2}</p>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder={subData.sub3}
                  />
                </div>
                <button type='submit' className='btn'>
                {subData.sub4}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
