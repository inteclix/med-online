import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

import AppContext from "../../contexts/app-context"
import RouteWithLayout from "./RouteWithLayout";

const PrivateRouteWithLayout = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [auth, setAuth] = useState(null)
  const { api } = useContext(AppContext)
  const { layout: Layout, component: Component, ...rest } = props;
  useEffect(() => {
    api.reAuthenticate()
      .then((res)=>{
        setAuth(res)
        setIsLoading(false)
      })
      .catch((err) => {
        console.dir(err)
        setIsLoading(false)
      })
  })

  if (isLoading) {
    return (
      <Layout>
        <LinearProgress />
      </Layout>
    )
  }
  if (!auth) {
    return <Redirect to="/sign-in" />
  }
  return (
    <RouteWithLayout
      {...rest}
      component={Component}
      layout={Layout}
    />
  );
};

PrivateRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default PrivateRouteWithLayout;
