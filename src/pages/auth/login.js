import { useState } from 'react';

import { useAlert } from 'react-alert';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components/form/button';
import { Input } from '../../components/form/input';
import { Password } from '../../components/form/pass';
import { login } from '../../requests/authV1';
import { AuthLayout } from '../../themes/adminto/auth.layout';

export function LoginPage () {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const alert = useAlert()

  const loginEvent = () => {
    login({ username: name, password: pass }, window).then((res) => {
      if (res.status === 400) {
        res.json().then((e) => {
          alert.error(e.content)
        })
      } else {
        res.json().then((e) => {
          alert.success(e.content)
          navigate('/home/main')
        })
      }
    })
  }

  return (
    <AuthLayout>
      {{
        title: "登陆",
        form: (
          <>
            <Input
              label="用户名称*"
              helperText="notNull"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Password
              label="用户密码*"
              helperText="notNull"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></Password>
            <Button onClick={() => loginEvent()}>登陆</Button>
          </>
        ),
        link: (
          <>
            <br />
            <Link to="/auth/logup">没有用户名？注册新用户</Link>
            <br />
            <Link to="/auth/password">忘记用户密码？找回密码</Link>
            <br />
            <Link to="/auth/name">忘记用户名？找回用户名</Link>
            <br />
            <Link to="/home/version">🍉 Flina version 1.0.0</Link>
          </>
        )
      }}
    </AuthLayout>
  )
}
