import { Link as RouterLink } from 'react-router-dom';
import { ButtonBase, Box, Link, Typography, styled } from '@mui/material';

const images = [
  {
    url: 'https://wtax-am.sagacom.com/files/2020/02/breakfast-2-20-20-shutterstock_256153477.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/uploaded-files/1594254056452.jpeg',
    title: 'Burgers',
    width: '40%',
  },
  {
    url: 'https://content.instructables.com/ORIG/FWV/K66E/KA5CW1A8/FWVK66EKA5CW1A8.jpg',
    title: 'Pizza',
    width: '40%',
  },
  {
    url: 'https://miro.medium.com/max/1024/1*cx6Vl-c3D_zZmqFwUqFvEQ.jpeg',
    title: 'Mexican',
    width: '40%',
  },
  {
    url: 'https://th.bing.com/th/id/OIP.wCKeKqDoseaSuOKMX9NSNgHaE6?pid=ImgDet&rs=1',
    title: 'Asian',
    width: '40%'
  },
  {
    url: 'https://th.bing.com/th/id/R.f377ee0d750fda0039e6a578050591ca?rik=IQy%2fmnh1htWh4A&pid=ImgRaw&r=0',
    title: 'Coffee',
    width: '40%'
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export const CategoriesList = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Link component={RouterLink} to="/menu-items" sx={{ textDecoration: "none" }}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
            </Link>
          </ImageButton>
      ))}
    </Box>
  )
}