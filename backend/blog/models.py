from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from PIL import Image


class Categories(models.TextChoices):
    LOVE = 'love',
    GOD = 'God',
    ADVENTURE = 'adventure',
    CODE = 'code',
    PROGRAMMING = 'programming',


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.CODE)
    image_cover = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=50)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=3)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset =BlogPost.objects.all().filter(slug__iexact=slug).count()

            # excepted -- first-blog-post
        self.slug = slug
        
        if self.featured:
                try:
                    temp = BlogPost.objects.get(featured=True)
                    if self != temp:
                        temp.featured = False
                        temp.save()
                except BlogPost.DoesNotExist:
                    pass
        super(BlogPost, self).save(*args, **kwargs)
    

    def imageSave(self):
        super().imageSave()

        img = Image.open(self.image_cover.path)
        if img.height > 250 or img.width > 200:
            output_size = (250, 200)
            img.thumbnail(output_size)
            img.save(self.image_cover.path)

    def __str__(self):
        return self.title


