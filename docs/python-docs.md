---
id: python
title: Python Docs
sidebar_label: Introduction
slug: python

---
Hello Guys, Do you tired of manually creating **SEO Images** for your Blog ?

Then, **ShareImage** is for you!

Install **ShareImage** with PIP:

```sh
pip install ShareImage
```

Then, use it in any **Python Project**:

\`\`\`py title=app.py

from ShareImage import ShareImage

image = ShareImage(

    title = "Image Title",

    cloudName = "CLOUDINARY_CLOUD_NAME",

    imagePublicId = "CLOUDINARY_IMAGE_ID"

)

\# Add Proper Values in cloudName and imagePublicId

\`\`\`