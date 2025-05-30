---
title: Issue Labeler
description: Label issues based on title and body against list of defined labels.
slug: issuelabeler
screenshots:
  - https://raw.githubusercontent.com/riyadhalnur/issuelabeler/master/assets/screenshot.png
authors:
  - riyadhalnur
repository: riyadhalnur/issuelabeler
host: https://issuelabeler.verticalaxisbd.com
stars: 25
updated: 2025-03-16 01:02:14 UTC
organizations:
  - pymc-devs
  - Provenance-Emu
  - GameServerManagers
  - aonez
  - nodeschool
  - janelia-flyem
  - chrisyue
  - JaneliaSciComp
  - RMHogervorst
  - Sama34
---

A GitHub bot to label issues based on title and body against list of defined labels. Built with [probot](https://github.com/probot/probot).  

## Installation  
After installation, create `.github/labeler.yml` in the default branch to enable it:

```yml
# Number of labels to fetch (optional). Defaults to 20
numLabels: 40
# These labels will not be used even if the issue contains them
excludeLabels:
  - pinned
```  
