'use strict';

angular.module('deve.rsApp')
    .service('Projects', function Projects() {
        return {
            getProjects: function() {
                return [
                    {
                        "name": "Start.Represent.Us",
                        "quote": "",
                        "description": "",
                        "images": [""],
                        "skills": [""]
                    },
                    {
                        "name": "Unlimited Corruption",
                        "quote": "",
                        "description": "",
                        "images": [""],
                        "skills": [""]
                    },
                    {
                        "name": "Represent.Us",
                        "quote": "Represent.Us is a fresh campaign to pass the American Anti-Corruption Act: a law that would overhaul campaign finance, impose strict lobbying and conflict of interest laws, and end secret political money. We are mobilizing millions of Americans - conservatives and progressives, young and old, every issue group fighting K Street, online and offline - to join this campaign.",
                        "description": "The Represent.Us campaign site was built with user action and conversion rates as the #1 priority. Ease of use and clarity were the main pillars of the site's visual and interface design. I constructed the front-end of the website (<strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>) and the back-end integration with the <a href='http://actionkit.com/' target='_blank'>ActionKit</a> organizing platform API and database.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["ActionKit CRM", "WordPress Theme Development", "JavaScript", "Facebook API"]
                    },
                    {
                        "name": "unPAC",
                        "quote": "From social networks to town halls to blogs, unPAC amplifies our voices and sheds fresh light on modern political corruption. We are building a citizen-led movement large enough to restore the founding principles of our democracy.",
                        "description": "I worked with the talented <a href='http://www.purpose.com/movements/unpac/' target='_blank'>Purpose team</a> to develop an easy to use and quick to update site for rapid response online campaigning. The site was built on top of <strong>Wordpress</strong> using a custom template and with the ability to withstand large amounts of daily traffic with no downtime or performance issues.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["ActionKit", "WordPress", "PHP", "SQL", "JavaScript", "jQuery"]
                    },
                    {
                        "name": "Creepster TV (Overlook TV)",
                        "quote": "Overlook, LLC creates TV channels that deliver niche content via the Internet. With a 'smart' TV or another Internet-connected television device, a viewer can enjoy our video programming at any time of day. Our partners distribute their catalogs of films, documentaries and other productions to this new, rapidly-growing audience and tap a whole new revenue source by doing so.",
                        "description": "Helped advise on and develop <a href='http://www.overlook.tv/' target='_blank'>Overlook TV</a>/<a href='http://www.creepster.tv/' target='_blank'>Creepster TV</a>'s online video-streaming web interface, in addition to streaming clients for the Roku and Boxee platforms. The Creepster TV website and content delivery system was built using a custom API and made use of <strong>PHP</strong>, <strong>MySQL</strong>, and <strong>JavaScript</strong>.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["HTML5", "CSS", "PHP", "SQL", "JavaScript", "jQuery"]
                    },
                    {
                        "name": "blueverse",
                        "quote": "BlueVerse.net, a new social networking site from Blue Redefined, is an online community specifically developed for the disabled and their friends.",
                        "description": "I helped non-profit Blue Redefined to develop a first of its kind social network for the disabled. We built a robust social network from the ground up using <strong>PHP</strong>, <strong>MySQL</strong>, <strong>HTML5</strong> and <strong>CSS3</strong>.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["HTML5", "CSS", "PHP", "SQL", "Apache"]
                    },
                    {
                        "name": "The American Anti-Corruption Act",
                        "quote": "The American Anti-Corruption Act gets money out of politics, so the people can get back in.",
                        "description": "I used <strong>JavaScript</strong> and <strong>jQuery</strong> to create a rich user experience in which to learn and interact with the ideas and language behind the new piece of legislation.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["ActionKit", "JavaScript", "jQuery", "HTML5", "CSS"]
                    },
                    {
                        "name": "United Republic",
                        "quote": "United Republic (UR) is a new, nonpartisan, nonprofit organization leading a groundbreaking campaign to confront and reform the undue influence of special interests in US politics. In November, 2013, UR is launching a bold grassroots campaign to get millions of Americans - from Occupy to the Tea Party - actively supporting comprehensive legislation that reshape American politics. The law would overhaul campaign finance, lobbying/quid-pro-quo and transparency laws. UR seeks to create a political system in which the needs and ideas of the many aren’t drowned out by the influence of the wealthy few.",
                        "description": "Worked with <a href='http://www.tivix.com/' target='_blank'>Tivix</a> to develop a comprehensive online activism portal to fight the corrupting influence of money in politics. Used <strong>Python</strong> and <strong>Django</strong> for dynamic database driven functionality such as online volunteer recruitment and screening.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["Python", "Django", "PHP", "SQL", "WordPress", "JavaScript"]
                    },
                    {
                        "name": "Republic Report",
                        "quote": "Republic Report is dedicated to rooting out the corruption that is so corrosive to American values. We investigate and uncover the buying and selling of politicians and of institutions entrusted with upholding the public interest. We expose how big money distorts major policy decisions – harming our economy and our people.",
                        "description": "Developed a custom <strong>WordPress</strong> theme with extensive custom functionality to ensure consistency and easy of use for multiple users and a large volume of readers.",
                        "images": ["repus1.jpg","repus2.jpg", "repus3.jpg", "repus4.jpg"],
                        "skills": ["WordPress", "PHP", "SQL", "jQuery", "JavaScript"]
                    }
                ];
            }
        };
    });
