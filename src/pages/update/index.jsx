import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { UpdateVenue } from '../../form';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import { useHelmet } from '../../hooks';

function Update() {
  const { dataLogin } = useContext(AuthContext);
  const token = dataLogin?.token || load('token');
  const venueManger =
    load('venueManger') || (dataLogin && dataLogin.venueManger);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const updateMeta = useHelmet({
    title: `Update venue | Holidaze`,
    description: `Update your place and make it even better. Update the details, add new photos, and change the price.`,
    keywords: 'Holidaze, venue, bookings, rentals, update',
  });

  useEffect(() => {
    if (token && venueManger) {
      setLoggedIn(true);
    } else {
      navigate('/', { replace: true });
      setLoggedIn(false);
    }
  }, [navigate, token, venueManger]);

  if (!loggedIn) {
    return null;
  }

  return (
    <>
      {updateMeta}
      <Container>
        <div className="create my-3">
          <div className="create-container">
            <h1 className="h4 mx-1">Update your place</h1>
            <p className="mx-1">Earn passive income by renting properties!</p>
            <UpdateVenue />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Update;
