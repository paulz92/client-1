import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar'

import { Layout } from '@/containers'
import styles from './index.scss'
import { AboutPage, Title } from '@/components';

const CHARLES_IMG = '/public/images/cuteCharles.png'
const PAUL_IMG = '/public/images/paul-z2.jpeg'
const EMMANUEL_IMG = '/public/images/eman.jpg'
const PLACEHOLDER_AVATAR = '/public/images/user-placeholder.svg'
export default () => (
  <Layout>
    <div >
    <Title title="About Torq" />
    <Title title="Our Team" />
    <div className={styles.root}>
    {/* card one */}
      <Card className={styles.cardRoot}>
        <Avatar
          className={styles.avatar}
          src={CHARLES_IMG}
        />
        <CardContent>
          <Typography className={styles.font} variant="headline" component="h1">
            Charles Kenney
          </Typography>
          <Typography className={styles.font} component="h2">
            Backend Developer
          </Typography>
          <Typography className={styles.bio} component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      {/* card two */}
      <Card className={styles.cardRoot}>
        <Avatar
          className={styles.avatar}
          src={PAUL_IMG}
        />
        <CardContent>
          <Typography className={styles.font} variant="headline" component="h1">
            Paul Z
          </Typography>
          <Typography className={styles.font} component="h2">
            Developer
          </Typography>
          <Typography className={styles.bio} component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      {/* Card Three */}
      <Card className={styles.cardRoot}>
        <Avatar
          className={styles.avatar}
          src={EMMANUEL_IMG}
        />
        <CardContent>
          <Typography className={styles.font} variant="headline" component="h1">
            Emmanuel M.R.
          </Typography>
          <Typography className={styles.font} component="h2">
            Developer
          </Typography>
          <Typography className={styles.bio} component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      {/* Card Four */}
      <Card className={styles.cardRoot}>
        <Avatar
          className={styles.avatar}
          src={PLACEHOLDER_AVATAR}
        />
        <CardContent>
          <Typography className={styles.font} variant="headline" component="h1">
            Jamal P
          </Typography>
          <Typography className={styles.font} component="h2">
            Developer
          </Typography>
          <Typography className={styles.bio} component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  </Layout>
)