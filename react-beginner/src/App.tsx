import * as React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { AppThemeProvider } from 'contexts/AppThemeProvider/AppThemeProvider';
import { UserContextProvider } from 'contexts/UserProvider/UserContextProvider';
import { AppRoute } from 'enums/router';
import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { AddPostsPage } from 'pages/AddPostPage/AddPostsPage';
import { ActivationPage } from 'pages/Authorization/ActivationPage';
import { LoginPage } from 'pages/Authorization/LoginPage';
import { PasswordResetPage } from 'pages/Authorization/PasswordResetPage';
import { RegistrationPage } from 'pages/Authorization/RegistrationPage';
import { RequestPasswordResetPage } from 'pages/Authorization/RequestPasswordResetPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { PostPage } from 'pages/PostPage/PostPage';
import { ProtectedPage } from 'pages/ProtectedPage';

export function App() {
  return (
    <AppThemeProvider>
      <UserContextProvider>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainLayout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.PostsAdd}
              element={
                <ProtectedPage authorizedOnly>
                  <AddPostsPage />
                </ProtectedPage>
              }
            />
            <Route
              path={`${AppRoute.Posts}/:postId`}
              element={<PostPage />}
            />
            <Route
              path={AppRoute.Login}
              element={
                <ProtectedPage
                  anonymousOnly
                  redirectPage={AppRoute.Main}
                >
                  <LoginPage />
                </ProtectedPage>
              }
            />
            <Route
              path={AppRoute.Register}
              element={
                <ProtectedPage
                  anonymousOnly
                  redirectPage={AppRoute.Main}
                >
                  <RegistrationPage />
                </ProtectedPage>
              }
            />
            <Route
              path={AppRoute.ForgotPassword}
              element={<RequestPasswordResetPage />}
            />
            <Route
              path={`${AppRoute.ResetPassword}/:uid/:token`}
              element={<PasswordResetPage />}
            />
            <Route
              path={`${AppRoute.Activate}/:uid/:token`}
              element={<ActivationPage />}
            />
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<div>Not found</div>}
          />
          <Route
            path="*"
            element={
              <Navigate
                to={AppRoute.NotFound}
                replace
              />
            }
          />
        </Routes>
      </UserContextProvider>
    </AppThemeProvider>
  );
}
