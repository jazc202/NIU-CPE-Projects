import flask as fl
import jinja2 as ji
import stories as st

env = ji.Environment(
    loader=ji.PackageLoader("app"),
    autoescape=ji.select_autoescape()
)

# form1Template = env.get_template('formone.html')
# form2Template = env.get_template('formtwo.html')
storyTemplate = env.get_template('story.html')
newStoryTemplate = env.get_template('addStory.html')
dropdownTemplate = env.get_template('dropdown.html')

# story1
# story2

story1 = st.Story(
        ["place", "noun", "verb", "adjective", "plural_noun"],
        """Once upon a time in a long-ago {place}, there lived a
        large {adjective} {noun}. It loved to {verb} {plural_noun}.""")

story2 = st.Story(
        ["adjective", "noun", "relative", "placee", "verb", "secondNoun"],
        """When I was a {adjective} {noun} my {relative} took me into the 
        {place} to {verb} the {secondNoun}""")
formats = [story1, story2]

app = fl.Flask(__name__)


@app.route("/")
def index():
    return dropdownTemplate.render(f=formats)


@app.post('/forms')
def getForm():
    ind = int(fl.request.form.get('formats'))
    story = formats[ind]
    template = env.get_template('form.html')
    return template.render(questions=story.prompts, format=ind)


@app.post('/stories')
def getStories():
    # get form questions and answers in for loop
    # f = fl.request.form.items()
    format = int(fl.request.form.get('format'))
    f = fl.request.form.to_dict()
    thisStory = formats[format]
    return thisStory.generate(f)


@app.route('/addStory')
def newStory():
    return newStoryTemplate.render()


@app.post('/')
def storyAdded():
    partsOfSpeech = fl.request.form.get('partsOfSpeech').splitlines()
    storyText = fl.request.form.get('storyText')
    newStory = st.Story(partsOfSpeech, storyText)
    formats.append(newStory)
    return index()
